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
/////////////////////////////////////////////////////////////////////////////////////////1
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
/////////////////////////////////////////////////////////////////////////////////////////2
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
/////////////////////////////////////////////////////////////////////////////////////////3
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
/////////////////////////////////////////////////////////////////////////////////////////4
function getbudgets(){
    let sumbudgets = 0;
    for(loop=0;loop<arguments[0].length;loop++){
        sumbudgets+=arguments[0][loop].budget;
    }
    return sumbudgets;
}

console.log(getbudgets([
    {name:"John",age:21,budget:23000},
    {name:"Steve",age:32,budget:40000},
    {name:"Martin",age:16,budget:2700}
]));


console.log(getbudgets([
    {name:"John",age:21,budget:29000},
    {name:"Steve",age:32,budget:32000},
    {name:"Martin",age:16,budget:1600}
]));
/////////////////////////////////////////////////////////////////////////////////////////5
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
/////////////////////////////////////////////////////////////////////////////////////////6
function sumTwoSmallestNums(arr){
    let min1 = Math.max(...arr),min2 = Math.max(...arr);
    for(i = 0 ;i<arr.length;i++){
        if(arr[i]>=0 && min1 > arr[i]){
            min1 = arr[i];
        }
    }
    for(i = 0 ;i<arr.length;i++){
        if(arr[i]>=0 && min2 > arr[i] && min1 != arr[i]){
            min2 = arr[i];
        }
    }
    return min1+min2;
}


console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));
/////////////////////////////////////////////////////////////////////////////////////////7
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
/////////////////////////////////////////////////////////////////////////////////////////8
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
/////////////////////////////////////////////////////////////////////////////////////////9
function isValidIP(IP){
    let strIP = IP.split('.');
    if(strIP.length != 4){
        return false;
    }

    for(i = 0 ;i < 4;i++){ //1-255
        if(strIP[i]>255 || strIP[i]<1){
            return false;
        }
        if(i===3 && strIP[3]==0){
            return false;
        }
    }
    for(i = 0 ;i < 4;i++){ // font num 056 05 065 014 = false
        if(strIP[i][0]==0 && strIP[i].length > 1){
            return false;
        }
    }

    return true;
}


console.log(isValidIP("1.2.3.4")); //t
console.log(isValidIP("1.2.3")); //f
console.log(isValidIP("1.2.3.4.5")); //f
console.log(isValidIP("123.45.67.89")); //t
console.log(isValidIP("123.456.78.90")); //f
console.log(isValidIP("123.045.067.089")); //f
/////////////////////////////////////////////////////////////////////////////////////////10