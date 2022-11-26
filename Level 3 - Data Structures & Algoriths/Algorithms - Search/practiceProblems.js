/* this is bookmarked on leetcode. submit solution their.
1. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

function targetValue (arr, low, high, value) {
    
    if (low > high) {
        return -1;
    }

    let mid = parseInt((low + high) / 2);

    if (arr [mid] === value) {
        return mid;
    } else if  (arr [mid] < value) {
        return targetValue (arr, mid + 1, high, value);
    } else {
        return targetValue (arr, low, mid - 1, value);
    }
}
let arr = [5,7,7,8,8,10];
console.log (targetValue (arr, 0, arr.length + 1, 8));


/*
2. Check duplicate elements exits or not in given sorted array.(job is to check wheater target has a duplicate or not)
arr = 2 3 5 5 7 9

target = 5 
ans = 'yes'

target = 7
ans = 'No'
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

// let arr = [2, 3, 5, 5, 7, 9];
// console.log (duplicateTargetElement (arr, 0, arr.length - 1, 5))

/*
3. In given array find pair of two number that sums upto taget & number should be consecutive number.  
arr = 1 3 6 8 9 15
target = 9

Output :- 3 + 6 = 9;
*/

function consecutivePair (arr, low, high, sum) {

    if (low > high) {
        return - 1;
    }

    let mid = parseInt ((low + high) / 2);

    if (arr [mid] + arr [mid - 1] === sum) {
        return [mid -1, mid];
    } else if (arr [mid] + arr [mid + 1] === sum) {
        return [mid, mid + 1];
    } else if (arr [mid] + arr [mid + 1] < sum) {
        return consecutivePair (arr, mid + 1, high, sum);
    } else {
        return consecutivePair (arr, low, mid - 1, sum);
    }
}
// let arr = [1, 3, 6, 8, 9, 15]
// console.log (consecutivePair (arr, 0, arr.length + 1, 9));