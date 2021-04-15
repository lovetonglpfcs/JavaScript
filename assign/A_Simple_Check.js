function simpleCheck(a, b) {
    let result = 0;
	while(a>0&&b>0){
        if((a%b==0)||(b%a==0)){
            result++;
        }
        a--;
        b--;
    }
    return result;
}

console.log(simpleCheck(3, 5))//, 2
console.log(simpleCheck(10, 1))//, 1
console.log(simpleCheck(7, 7))//, 7
console.log(simpleCheck(16, 32))// 5
console.log(simpleCheck(42, 21))//4
console.log(simpleCheck(54, 17))//1
console.log(simpleCheck(150080, 150032))//, 10
