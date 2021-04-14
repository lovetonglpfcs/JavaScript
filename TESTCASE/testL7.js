function sumTwoSmallestNums(arr){
    let min1 = Math.max(...arr),min2 = Math.max(...arr);
    for(i = 0 ;i<arr.length;i++){
        if(arr[i]>=0 && min1 > arr[i]){
            min1 = arr[i];
        }
    }
    for(i = 0 ;i<arr.length;i++){
        if(arr[i]>=0 && min2 > arr[i] && min1 != arr[i]){
            min2 = arr[i];
        }
    }
    return min1+min2;
}


console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));