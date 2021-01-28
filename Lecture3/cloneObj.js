const obj1 ={
    person : 'Anoy',
    weight : 65
}

//const obj2 = obj1;
//obj1.weight = 75;
const obj2 = Object.assign({},obj1);
console.log(obj1);
console.log(obj2);