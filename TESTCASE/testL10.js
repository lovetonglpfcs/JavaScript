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