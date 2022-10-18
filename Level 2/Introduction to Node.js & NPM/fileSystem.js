let fs = require('fs');
fs.readFile ('./abc.txt', 'utf-8', (data, error) => {
    if (error) {
    console.log (error);
    } else {
    console.log (data);
    }
} ) 