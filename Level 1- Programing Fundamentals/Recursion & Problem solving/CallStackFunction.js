
function a(n) {
    if (n===0) {  // If we comment off line 3 to 5 then stack will overflow & reached to maxium limits.
   return;
}
a(n-1);
console.log(a)
}
a(10); // Function will call for 5 times

