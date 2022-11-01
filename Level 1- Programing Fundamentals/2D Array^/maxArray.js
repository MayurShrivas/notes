let numArray = [234, 34, 12, 1, 23];
let maxValue = numArray[0];
for (let i = 1;i <= numArray.length - 1;i ++) {
    if (numArray[i] > maxValue) 
    {
        maxValue = numArray [i];
    }
}
console.log (maxValue)
