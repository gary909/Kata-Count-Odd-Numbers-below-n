function oddCount(n){
    let myNum = n / 2;
    myNum = Math.floor(myNum, 0);
    return myNum;
}

console.log(oddCount(7)); // 3, i.e [1, 3, 5]
console.log(oddCount(15)); // 7, i.e [1, 3, 5, 7, 9, 11, 13]