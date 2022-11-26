/* Problem Statement : -
The essential takeaway from the problem is that the stated condition may also be visualised as (ai-bi) + (aj-bj)> 0, which
allows us to create a second array to represent the difference between the two arrays. Let's call this array D. As a
result, the task boils down to finding combinations where Di+Dj>0. Now we can sort the D array, and for each
associated element Di, we'll find the number of suitable pairs Di may form and save that number in a count variable. We
may use the binary search to discover the upper bound of -Di for each element Di to find the number of suitable pairs it
can make. All elements present after -Di will also make sense because the array is sorted. Because the array is sorted,
all elements after -Di will make good pairs for Di. As a result, if the upper bound of -Di is x and the entire size of the
array is n, the total number of pairs corresponding to Di is n-x. This method takes O(NlogN) time to complete.

• The given condition in the question can be rewritten as: 
A[i] + A[j] > B[i] + B[j]
A[i] + A[j] - B[i] - B[j] > 0
(A[i] - B[i]) + (A[j] - B[j]) > 0

• Create a new array, D, to hold the difference between the elements in both arrays at the relevant index, i.e.
D[i] = A[i] - B[i]

• Sort the difference array D so that each element i is smaller than the ones to its right to ensure that the constraint i < j is satisfied.

• If the value in the difference array D is negative at index i all we have to do is identify the nearest place 'j' where the value is just 
more than -D[i], such that the value sums to greater than 0.

• Because the array is sorted, the Binary Search can be used to identify such index 'j'.
*/

/* Class Explanation : -
a[i] + a[j] > b[i] + b[j]
(a[i] - b[i]) + (a[j] - b[j]) > 0
i < j
a = 4 8 2 6 2
b = 4 5 4 1 3
d = 0 3 -2 5 -1 
ans = 7
*/


