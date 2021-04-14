function removeDupa(arr){
    let output = [];
    output.push(arr[0]);
    for(i=1;i<arr.length;i++){
        let flagofsame = false;
        for(j=0;j<output.length;j++){
            if(output[j]===arr[i])
            flagofsame = true;
        }
        if(flagofsame)
            continue;
        output.push(arr[i]);
    }
    return output;
}


console.log(removeDupa([1,0,1,0]));
console.log(removeDupa(["The","big","cat"]));
console.log(removeDupa(["John","Taylor","John"]));