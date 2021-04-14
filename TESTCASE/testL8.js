function simplePair(arr,n){
    let result = null;
    for(x = 0;x<arr.length;x++ ){
        for(y = 0;y<arr.length;y++ ){
            if(arr[x]*arr[y]===n && arr[x]!=arr[y]){
                result = [];
                result.push(arr[x]);
                result.push(arr[y]);
                return result;
            }
        }
    }
    return result;
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));