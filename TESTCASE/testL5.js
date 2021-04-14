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