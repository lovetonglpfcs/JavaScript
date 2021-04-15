function averageASCII(str) {
	let strWord = str.split(' ');
    let strascii = [];
    let sum = 0 ;
    for(x=0;x<strWord.length;x++){
        let temp = 0;
        for(y=0;y<strWord[x].length;y++){
            temp+=strWord[x].charCodeAt(y);
        }
        strascii.push(temp);
        sum+=temp;
    }
    let ave = sum/strascii.length;
    for(x=0;x<strascii.length;x++){
        if(strascii[x]>ave){
            strWord[x]=strWord[x].toUpperCase();
        }else{
            strWord[x]=strWord[x].toLowerCase();
        }
    }
    strWord =strWord.join(' ');
    return strWord
}
console.log(averageASCII("Edabit helps you learn in bitesize chunks"))//"EDABIT HELPS you learn in BITESIZE CHUNKS")
console.log(averageASCII("To be or not to be"))//, "To be or NOT to be")
console.log(averageASCII("What you egg"))//, "WHAT you egg")
console.log(averageASCII("Made by Harith Shah"))//, "Made by HARITH Shah")
console.log(averageASCII("Boom"))//, "Boom")
console.log(averageASCII("The most addictive way to learn"))//, "The most ADDICTIVE way to LEARN")
console.log(averageASCII("Tell me the time"))//"TELL me the TIME"