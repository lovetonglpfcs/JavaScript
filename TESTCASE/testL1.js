function numbersplit(intnum){
    let Res=[];
    Res.push(Math.floor(intnum/2));
    Res.push(intnum-Res[0]);
    return Res;
}

console.log(numbersplit(4));
console.log(numbersplit(10));
console.log(numbersplit(11));
console.log(numbersplit(-9));
/*
[ 2, 2 ]  
[ 5, 5 ]  
[ 5, 6 ]  
[ -5, -4 ]
*/
