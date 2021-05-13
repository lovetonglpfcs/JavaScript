function competitionRank(results, person) {
	const keyplayers = Object.getOwnPropertyNames(results);
    let rank = 1;
    let Realrank = 1;
    let target = results[person];
    let trig = false;
    for(x=0;x<keyplayers.length;x++){
        if(target<results[keyplayers[x]]){
            rank++;
            Realrank++;
        }else if(target==results[keyplayers[x]]){
            rank++; 
            trig = true;
        }
    }
    if(trig)return Realrank;
    return rank;
}
console.log(competitionRank({Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87}, "Ellie"))//, 4)
console.log(competitionRank({Ryan: 97, Thomas: 85, Kai: 95, Aiden: 87, Logan: 90}, "Logan"))//, 3)
console.log(competitionRank({Lilly: 91, Harris: 87, Archie: 93, Lexi: 100, Ava: 88}, "Lilly"))//, 3)
console.log(competitionRank({Jayden: 90, Josh: 90, Rebecca: 96, Jack: 89, Max: 96}, "Rebecca"))//, 1)
console.log(competitionRank({Ben: 78, Quinn: 84, Lena: 84, Isla: 92, Kayla: 72}, "Ben"))//, 4)
console.log(competitionRank({Lucy: 81, Ella: 90, Summer: 91, Harper: 81, Sadie: 85}, "Ella"))//, 2)
console.log(competitionRank({Cole: 96, Carson: 92, Gabriel: 91, Hollie: 97, Penelope: 85}, "Hollie"))//, 1)
console.log(competitionRank({Michael: 89, Noah: 98, Reuben: 88, Sam: 91, Mia: 91}, "Mia"))//, 2)
console.log(competitionRank({James: 93, Maria: 91, Lewis: 95, Joseph: 96, Imogen: 90}, "Lewis"))//, 2)
console.log(competitionRank({Jessica: 90, Emily: 99, Hope: 91, Charlie: 96, Lucas: 87}, "Hope"))//, 3)
console.log(competitionRank({Sophie: 86, Piper: 98, Elliot: 100, Erica: 90, Freya: 100}, "Freya"))//, 1)
console.log(competitionRank({Grace: 93, Henry: 90, Florence: 98, Millie: 89, David: 99}, "Henry"))//, 4)
console.log(competitionRank({Alfie: 90, Elijah: 90, Cara: 85, Isaac: 96, Bella: 92}, "Elijah"))//, 3)
console.log(competitionRank({Clara: 85, Matilda: 86, Amelia: 98, Oliver: 95, Adam: 94}, "Clara"))//, 5)
console.log(competitionRank({Nina: 81, Tommy: 79, Tyler: 84, Leo: 79, Hallie: 79}, "Nina"))//, 2)
console.log(competitionRank({Violet: 99, Finn: 100, Eden: 99, Frankie: 98, Rory: 98}, "Frankie"))//, 4)
console.log(competitionRank({Robbie: 70, Julia: 76, Owen: 70, Phoebe: 92, Jacob: 79}, "Owen"))//, 4)
console.log(competitionRank({Andrew: 95, Louis: 95, Riley: 95, Amy: 95, Charlotte: 95}, "Charlotte"))//, 1)
console.log(competitionRank({Harry: 81, Elsie: 81, Grayson: 84, John: 84, Alex: 81}, "Elsie"))//, 3)
console.log(competitionRank({Innes: 76, Lola: 85, Anna: 92, Cooper: 93, Daniel: 93}, "Cooper"))//, 1)