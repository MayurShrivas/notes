/*
* Assignment 1. Write a nodeJS program that would read content from the file and also append new content into the file.
*/

//Solution :
const fs = require("fs");

const fileName = "example.txt";
const stringToBeAppended = "Adding a new string to the file\n";

fs.open(fileName, "a", (err, fd) => {
  if (err) {
    console.log("Error while opening the file " + err.message);
  } else {
    fs.write(fd, stringToBeAppended, (err, bytes) => {
      if (err) {
        console.log("Error thrown while appending characters" + err.message);
      } else {
        console.log(bytes + " bytes written successfully");
      }
    });
  }
});

fs.readFile("example.txt", "utf8", function (err, data) {
  console.log(data);
});


/*
* Assignment 2. Explore setTimeout and setInterval and write a program that would make use of setTimeout and call a
function after 10 sec once the app starts, and setInterval would print number 1 to 10 after interval of 5 secs and
then it should stop. 
*/

// Solution :
function appStart() {
    console.log("App started")
}
 
setTimeout(appStart, 10000)
 
function printNumbers() {
    for (let i = 0; i <= 10; ++i)
        console.log(i)
}
 
setInterval(printNumbers, 5000)