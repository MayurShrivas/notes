/*
Our task is to find the minimum of possible maximum sum of all segments. This can be done by keeping track of the sum 
and updating it based on the given condition.

Naive Approach – We can check for all possibilities and update our maximum sum. These possibilities can be found
using backtracking which we have already seen in our previous sessions.

Efficient Approach – We can use Binary search to get an optimal solution. Let’s see each step - 
1. In binary search, minimum sum is 1 and maximum sum will be sum of all elements in array
2. Consider mid as maximum segment sum
3. Keep track of count of segments, till their sum is less than mid value.
4. If count is less than or equal to mid value, then mid value is possible else it will not
5. At last, find the minimum possible mid value which satisfies the condition.

arr = [1, 2, 3, 4], k = 3
maxium subarray sum should be minimum

low = 0, high = 4, mid = 2
{1} {2}
low = 3, high = 4, mid = 3
{1, 2} {3}
low = 4, high = 4, mid = 4
{1,2} {3} {4}
*/

function splitArray (arr, k) {
    let high = arr. reduce ((acc, num) => acc + num);
    console.log (high);
    let low = 0;
    let ans;
    while (low <= high) {
        let mid = parseInt ((low + high) / 2);
        let isPossible = checkPossibility (arr, k, mid);
        if (isPossible) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid +1;
        }
    }
    return ans;
}
function checkPossibility (arr, k, mid) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr [i] > mid) {
            return false;
        } else if (arr [i] <= mid) {
            sum += arr [i];
        } else {
            sum = arr [i];
            count ++;
        }
    } 
    count ++;
    if (count <= k) {
        return true;
    } else {
        return false;
    }
}
console.log (splitArray ([1, 2, 3, 4], 2));