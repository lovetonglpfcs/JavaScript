function equation(R){
    let total=Number.parseInt(R[0]);
    for(x=1;x<R.length;x=x+2){
        if(R[x]==="+"){
            total=total+Number.parseInt(R[x+1]);
        }else if(R[x]==="-"){
            total=total-Number.parseInt(R[x+1]);
        }else if(R[x]==="*"){
            total=total*Number.parseInt(R[x+1]);
        }
    }


    return total;
}
console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));