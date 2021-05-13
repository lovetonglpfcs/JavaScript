function isStretched(s1, s2) {
    let samechars = 0; 
    let s2check = 0;
    let founds = 0;
    if(s1.length<s2.length){
        return false;
    }
	for(x=0;x<s1.length;x++){
        if(s1[x]==s2[s2check]){
            if(s2check==0){samechars++;}
            founds++;
        }else if(s1[x]!=s2[s2check]&&founds!=samechars){
            return false;
        }else{
            s2check++;
            founds=1;
            if(s2[s2check]==undefined){
                return false;            
            }
        }
        
    }
    return true;
}

console.log(isStretched("pppaaannndddaaa", "panda"))//, true)
console.log(isStretched("hheelllloo", "hello"))//, false)
console.log(isStretched("magnet", "magnet"))//, true)
console.log(isStretched("eeeeemmmmmoooootttttiiiiiooooonnnnn", "emotion"))//, true)
console.log(isStretched("sssshhiipp", "ship"))//, false)
console.log(isStretched("cccaaannnddooorrr", "candor"))//, false)
console.log(isStretched("relationshiipp", "relationship"))//, false)
console.log(isStretched("magn", "magnet"))//, false)
console.log(isStretched("magneto", "magnet"))//, false)
console.log(isStretched("maggnet", "magnet"))//, false)