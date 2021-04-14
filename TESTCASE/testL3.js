function capToFront(str){
    let Res="";
    for(loopUpper=0;loopUpper<str.length;loopUpper++){
        if(str[loopUpper]===str[loopUpper].toUpperCase())
            Res+=str[loopUpper];
    }
    for(loopLower=0;loopLower<str.length;loopLower++){
        if(str[loopLower]===str[loopLower].toLowerCase())
            Res+=str[loopLower];
    }
    return Res;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
/*
APhpy
MENTmove
OCAKEshrt
*/