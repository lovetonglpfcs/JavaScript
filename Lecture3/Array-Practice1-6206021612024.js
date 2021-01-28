function compare(values1,values2){
    let arraytemp=[];
    for(x=0;x<values1.length;x++){
       arraytemp.push(typeof values1[x] == typeof values2[x]);
    }
    console.log(arraytemp);
}


let values1 =['Apple',1,false];
let values2 =['Fries',2,true];
let values3 =['Mars',9,'Apple'];

compare(values1,values2);
compare(values2,values3);
compare(values1,values3);