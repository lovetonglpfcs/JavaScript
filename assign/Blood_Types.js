function canGiveBlood(donor, receiver) {
	if(donor==receiver){
        return donor==receiver;
    }else if(donor == "O-"){
        return true;
    }else if(receiver=="AB+"){
        return true;
    }else if((receiver=="AB-")&&(donor.search("-")!=-1)){
        return true;
    }else if(receiver=="A+"&&(donor=="O+"||donor=="A-")){
        return true;
    }else if(receiver=="B+"&&(donor=="O+"||donor=="B-")){
        return true;
    }else{
        return false;
    }
    
}



console.log(canGiveBlood("O+", "A+"))
console.log(canGiveBlood("A-", "B-"))
console.log(canGiveBlood("A-", "AB+"))
console.log(canGiveBlood("AB-", "B-"))
console.log(canGiveBlood("AB+", "A+"))
console.log(canGiveBlood("O-", "A-"))
console.log(canGiveBlood("A-", "O-"))
console.log(canGiveBlood("O+", "AB-"))
console.log(canGiveBlood("O-", "AB+"))
console.log(canGiveBlood("AB+", "AB+"))
console.log(canGiveBlood("O+", "O-"))
console.log(canGiveBlood("O-", "AB-"))