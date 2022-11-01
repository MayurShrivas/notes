//Problem 1: Print 2d array in spiral method
/*
1 2 3 4
5 6 7 8
9 10 11 12
print as 1 2 3 4 8 12 11 10 9 5 6 7
*/
function printSpiral(arr){
    let l=0,r=arr[0].length-1,u=0,d=arr.length-1
    //if step 0 -- right, 1 - down, 2 - left, 3 - up
    let step=0,s=''
    while(l<=r && u<=d){
        if(step==0){
            for(let i=l;i<=r;i++){
                s+=arr[u][i]+' ';
            }
            u++
            step = (step+1)%4
        }
        else if(step==1){
            for(let i=u;i<=d;i++){
                s+=arr[i][r]+' ';
            }
            r--
            step = (step+1)%4
        }
        else if(step==2){
            for(let i=r;i>=l;i--){
                s+=arr[d][i]+' ';
            }
            d--
            step = (step+1)%4
        }
        else{
            for(let i=d;i>=u;i--){
                s+=arr[i][l]+' ';
            }
            l++
            step = (step+1)%4
        }
    }
    console.log('Spiral traversal:',s);
}

let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log('1.',arr);
printSpiral(arr)
