let sum = function (a, b) {
    return a + b;
}

let subtract = function (a, b) {
   return a - b;
}  

//module.exports = sum; // 1st way of Export.
// this.funct = sum; // 2nd way of Export.
module.exports = { sumExported : sum, subtractExported : subtract}; // 3rd way of Export. 

//module.exports = sum
//module.exports = subtract, // 4th way of export. 
