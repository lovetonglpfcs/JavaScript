function maxSeparator(str) {
	let result = [];
    let longgest = 0 ;
    for(x=0;x<str.length;x++){
        let last = 0 ;
        for(y=1+x;y<str.length;y++){
            if(str[x]==str[y]){
                last = y;
            }
            if((last-x)>longgest){
                longgest = last-x;
                result = [];
                result.push(str[last]);
            }
        }
        for(c=0;c<result.length;c++){
            if(result[c]==str[last]){
                break;
            }
            if((last-x==longgest)){
                result.push(str[last]);
                break;
            }
        }
    }
    return result;
}
console.log(maxSeparator("supercalifragilistic"))//, ["s"]
console.log(maxSeparator("laboratory"))//, ["a", "o", "r"]
console.log(maxSeparator("candle"))//, []
console.log(maxSeparator("eagle"))//, ["e"]
console.log(maxSeparator("acquaintance"))//, ["c"]
console.log(maxSeparator("bookkeeper"))//, ["e"]
console.log(maxSeparator("couple"))//, []
console.log(maxSeparator("slippery"))//, ["p"]
console.log(maxSeparator("address"))//, ["d", "s"]
console.log(maxSeparator("tatertot"))//, ["t"]
