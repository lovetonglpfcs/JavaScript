function cuttingGrass(arr, ...cuts) {
    let results = [];
	for(x=0;x<cuts.length;x++){
        let res = [];
        let zero = false;
        for(y=0;y<arr.length;y++){
            if(arr[y]>0){
                arr[y]-=cuts[x];
            }
            res[y]=arr[y];
            if(arr[y]==0){
                zero = true
            }
        }
        if(zero){
            results.push('Done');
        }else{
            results.push(res);
        }
    }
    return results;
}

console.log(cuttingGrass([4, 4, 4, 4], 1, 1, 1, 1))//, [[3, 3, 3, 3], [2, 2, 2, 2], [1, 1, 1, 1], "Done"])

console.log(cuttingGrass([5, 6, 7, 5], 1, 2, 1))//[[4, 5, 6, 4], [2, 3, 4, 2], [1, 2, 3, 1]])

console.log(cuttingGrass([8, 9, 9, 8, 8], 2, 3, 2, 1))//[[6, 7, 7, 6, 6], [3, 4, 4, 3, 3], [1, 2, 2, 1, 1], "Done"])

console.log(cuttingGrass([1, 0, 1, 1], 1, 1, 1))//["Done", "Done", "Done"])

console.log(cuttingGrass([4, 5, 4, 5], 2, 1, 1))//[[2, 3, 2, 3], [1, 2, 1, 2], "Done"])

console.log(cuttingGrass([4, 2, 2], 2, 1, 1))//["Done", "Done", "Done"])