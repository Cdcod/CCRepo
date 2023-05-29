const fs = require("fs");

fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) throw err;

  fs.readFile("file2.txt", "utf8", (err, data1) => {
    if (err) throw err;

    const Combine = `${data}${data1}`;

    fs.writeFile("file2.txt", Combine, (err) => {
      if (err) throw err;

      fs.readFile("file2.txt", "utf8", (err, data2) => {
        if (err) throw err;
        console.log(`Saved! \n${data2}`);
      });
    });
  });
});
