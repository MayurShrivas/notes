/*
Problem statement 2:
Given an array of positive integers, and a value sum, determine if there is a subset of the given set 
with sum equal to given sum. Find the two numbers that summation will be equal to the value in the sum variable.

Input: arr = [1, 3, 4, 5, 7, 10, 11, 12] , sum = 9

Output: 5 4

There is a subset (4, 5) with sum 9. 
*/

function consecutivePairSum (arr, low, high, sum) {

    if (low > high) {
        return - 1;
    }

    let mid = parseInt ((low + high) / 2);

    if (arr [mid] + arr [mid - 1] === sum) {
        return [mid -1, mid];
    } else if (arr [mid] + arr [mid + 1] === sum) {
        return [mid, mid + 1];
    } else if (arr [mid] + arr [mid + 1] < sum) {
        //right
        return consecutivePairSum (arr, mid + 1, high, sum);
    } else {
        // left
        return consecutivePairSum (arr, low, mid - 1, sum);
    }
}

let arr = [1, 3, 4, 5, 7, 10, 11, 12];
console.log (consecutivePairSum (arr, 0, arr.length + 1, 9))