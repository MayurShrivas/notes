/* 
Problem Statement 1. 
You are Given a series of positive integer numbers in the form of a sorted array as Ai where i is the index. 
N is the positive number which you have to check in the given array Ai whether the given N is duplicate in the Array or not. 
If it is duplicate output as “FALSE” if it is non duplicate output as “TRUE”.

Note: Use Binary search algorithm to find the N.

let arr = [1, 3, 5, 5, 7, 8, 9];
findNumber = 5; 
*/


function duplicateTargetElement (arr, low, high, target) {
    
    if (low > high) {
        return - 1;
    }
    
    let mid = parseInt((low + high) / 2);

    if (arr [mid] === target) {
        if (arr [mid - 1] === target || arr [mid + 1] === target) {
            return true;
        } else {
            return false;
        } 
    } else if (arr [mid] < target) {
        return duplicateTargetElement (arr, mid + 1, high, target)
        } else {
        return duplicateTargetElement (arr, low, mid - 1, target) 
        }
}

let arr = [1, 3, 5, 5, 7, 8, 9];
console.log (duplicateTargetElement (arr, 0, arr.length - 1, 5))