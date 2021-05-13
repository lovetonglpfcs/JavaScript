function multiplicity(arr) {
    let result = [];
    result.push([arr[0],0]);
	for(x=0;x<arr.length;x++){
        let t = false;
        for(y=0;y<result.length;y++){
            if(arr[x]!=result[y][0]){
                t = true;
            }
            if(arr[x]==result[y][0]){
                result[y][1]++;
                t = false;
            }
        }
        if(t){ //new
            result.push([arr[x],1]);
        }
    }
    return result;
}

console.log(multiplicity([1, 1, 1, 2, 2, 3]))//, [[1, 3], [2, 2], [3, 1]])
console.log(multiplicity([1, 1, 1, 1, 1]))//, [[1, 5]])
console.log(multiplicity([1, 5, 4, 3, 2]))//, [[1, 1], [5, 1], [4, 1], [3, 1], [2, 1]])
console.log(multiplicity([5, 5, 5, 5, 8]))//, [[5, 4], [8, 1]])
console.log(multiplicity([3, 3, 3, 0]))//, [[3, 3], [0, 1]])
console.log(multiplicity([1, 1, 2, 2, 3, 3, 4, 4]))//, [[1, 2], [2, 2], [3, 2], [4, 2]])
console.log(multiplicity([4, 4, 3, 3, 2, 2, 1, 1]))//, [[4, 2], [3, 2], [2, 2], [1, 2]])