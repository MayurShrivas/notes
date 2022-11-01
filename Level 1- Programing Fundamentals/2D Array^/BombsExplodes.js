//Problem 2: In a matrix, bombs denoted by -1, rest denoted by 0. When a bomb explodes, all adjacent cells values increase by 1, except if that is a bomb too
function explodeBomb(arr){
    let neighbors = [];
    let n = arr.length;
    let m = arr[0].length;

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]==-1){  //if bomb
                //console.log('Found bomb at',i,',',j);
                if(i>0) neighbors.push([i-1,j]);
                if(j<m-1) neighbors.push([i,j+1]);
                if(i<n-1) neighbors.push([i+1,j]);
                if(j>0) neighbors.push([i,j-1]);
                if(i>0 && j>0) neighbors.push([i-1,j-1]);
                if(i>0 && j<m-1) neighbors.push([i-1,j+1]);
                if(i<n-1 && j>0) neighbors.push([i+1,j-1]);
                if(i<n-1 && j<m-1) neighbors.push([i+1,j+1]);
            }
        }
    }

    for(let coords of neighbors){
        //console.log(coords);
        let [x,y] = coords
        if(arr[x][y]!=-1) arr[x][y]+=1
    }
    console.log('After explosion:',arr);
}

let bombs = [[0,-1,0,0,0],[0,0,0,-1,-1],[0,-1,-1,0,0],[-1,0,0,0,0]]
console.log('\n\n2.Original grid:',bombs);
explodeBomb(bombs);