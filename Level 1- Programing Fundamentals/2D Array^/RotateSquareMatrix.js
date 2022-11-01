//Problem 3: Rotate a square matrix 90 degrees clockwise, no extra space
//roate cl 90 = transpose + rev each row
function rotateClockwise(arr){
    console.log('\n\n3.Original matrix:',arr);
    transpose(arr);
    for(let row of arr){
        row = row.reverse();
    }
    console.log('After rotating 90 degrees clockwise:',arr);
}

function transpose(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            [arr[i][j],arr[j][i]] = [arr[j][i],arr[i][j]]
        }
    }
}

let arr2rotate = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
rotateClockwise(arr2rotate)