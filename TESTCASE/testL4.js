function totalVolume(){
    let res = 0;
    for(loop=0;loop<arguments.length;loop++){
        res+=arguments[loop][0]*arguments[loop][1]*arguments[loop][2];
    }
    return res;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])); //63
console.log(totalVolume([2,2,2],[2,1,1])); //10
console.log(totalVolume([1,1,1])); //1