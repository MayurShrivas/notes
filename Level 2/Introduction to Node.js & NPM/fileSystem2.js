let fs = require('fs');
fs.readFile ('./abc.js', 'utf-8', (data, error) => {
    if (error) {
    console.log (error);
    } else {
    console.log (data);
    }
} ) 