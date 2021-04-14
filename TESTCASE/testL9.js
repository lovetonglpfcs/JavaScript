function digitalClock(seconds){
    let time ="";
    time += twodigi((Math.floor(seconds/(60*60))%24));
    time += ":" + twodigi((Math.floor(seconds/(60)%60)));
    time += ":" + twodigi(seconds%60);
    return time;
}

function twodigi(num){
    if(num.toString().length==1){
        return "0"+num;
    }
    return num;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));