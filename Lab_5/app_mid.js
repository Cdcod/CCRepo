const express = require ( 'express' );
const date = require('date-and-time')

const app = express();
const now = new Date();

app.use((req, res, next) => {
	const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
	console.log("current date and time : " + value)
	next();
});

app.listen(process.env.port || 3000 );
console.log( 'Web Server is listening at port ' + (process.env.port || 3000 ));