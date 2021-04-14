function highest(num){
    let strnum = num.toString();
    let highnum = 0;
    for(loop=0;loop<strnum.length;loop++){
        if(highnum<strnum[loop]){
            highnum = strnum[loop];
        }
    }
    return highnum;
}

console.log(highest(379)); //9
console.log(highest(2)); //2
console.log(highest(377401)); //7