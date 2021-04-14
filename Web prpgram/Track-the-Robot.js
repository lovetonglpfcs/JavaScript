function trackRobot(...steps) {
    let bot =[0,0];
    let next = 0 ;
    for(i=0;i<steps.length;i++){
        if(next== 0){
            bot[1]+=steps[i];
        }else if(next==1){
            bot[0]+=steps[i];
        }else if(next== 2){
            bot[1]-=steps[i];
        }else if(next== 3){
            bot[0]-=steps[i];
        }
        if(next==3){
            next = 0;
            continue;
        }
        next++;
        
    }
	return bot;
}

console.log(trackRobot(20, 30, 10, 40), [-10, 10])
console.log(trackRobot(10, -10, -10, 10), [-20, 20])
console.log(trackRobot(),[0, 0])
console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [6, 5])
console.log(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0), [0, 3])
console.log(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5), [3, 0])