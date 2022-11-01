let numArray = [234, 34, 12, 1, 23];
let minValue = numArray[0];
for (let i = 1;i <= numArray.length - 1;i ++) {
    if (numArray[i] < minValue) 
    {
        minValue = numArray [i];
    }
}
console.log (minValue)
