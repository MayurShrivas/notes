//Problem 5: Multiply matrices
function multiplyMatrices(mat1,mat2){
    let r1 = mat1.length
    let c1 = mat1[0].length
    let r2 = mat2.length
    let c2 = mat2[0].length
    if(c1!=r2){
        return 'Cant be multiplied'
    } else{
        let ans = [...Array(r1)].map(()=>new Array(c2).fill(0))
        for(let i=0;i<r1;i++){
            for(let j=0;j<c2;j++){
                ans[i][j]=0;
                for(let k=0;k<r2;k++){
                    //console.log('We will multiply',mat1[i][k],'and',mat2[k][j]);
                    ans[i][j]+=mat1[i][k]*mat2[k][j]
                }
            }
        }
        return ans;
    }
}
let mat1 = [[1,7,5,4],[3,9,2,1],[5,10,8,6]]
let mat2 = [[1,5],[2,3],[9,12],[7,1]]
console.log('\n\n5.Matrix 1:',mat1);
console.log('Matrix 2:',mat2);
console.log('Multiplied matrices:',multiplyMatrices(mat1,mat2));