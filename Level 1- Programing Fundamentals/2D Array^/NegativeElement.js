/**Shift Negative elements to the end of an array
Problem – Given an array. You need to shift negative elements to the end of an array. For example –
Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 } 
 */
function reverse(arr){
    arr.sort();
    return reverse(arr)
}
reverse(-5, 3, -4, 88, -9, -10, 21, 5, 6)



function posStart_NegEnd(arr){
    if(arr.length === 0) return arr;
    let posPointer = 0;
    let negPointer = arr.length - 1;
    while(posPointer !== negPointer){
        if(arr[posPointer] >= 0) posPointer++;
        if(arr[negPointer] < 0) negPointer--;
        if(posPointer >= negPointer) break;
        if(arr[posPointer] < 0 && arr[negPointer] >= 0){
            [arr[posPointer], arr[negPointer]] = [arr[negPointer], arr[posPointer]] //swap
        }
    }
    return arr;
 }





 function negAtLast(arr) {
    const posArr = [];      // for storing +ve element
    const negArr = [];      // for storing -ve element

    for(let i = 0; i <= arr.length - 1; i++) {  // for loop for iteration 
        if(arr[i] > 0) posArr.push(arr[i]);     // if element is +ve than push in posArr
        else negArr.push(arr[i]);               // if element is -ve than push in negArr
    }
    return posArr.concat(negArr);               // join posArr and negArr
}
const array = [-5,3,-4,88,-9,-10,21,5,6]
console.log(negAtLast(array));

