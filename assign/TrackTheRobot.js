function trackRobot(...steps) {
    let result = [0,0] ;
    let Direction = 1;
    for(x=0;x<steps.length;x++){
        if(Direction===1){
            result[1]+=steps[x];
        }else if(Direction===2){
            result[0]+=steps[x];
        }else if(Direction===3){
            result[1]-=steps[x];
        }else if(Direction===4){
            result[0]-=steps[x];
            Direction = 0;
        }

        Direction++;
    }
	return result;
}

console.log(trackRobot(20, 30, 10, 40)) //[-10, 10]
console.log(trackRobot(10, -10, -10, 10)) //[-20, 20]
console.log(trackRobot()) //[0, 0]
console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) //[6, 5]
console.log(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0)) //[0, 3]
console.log(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5)) //[3, 0]
