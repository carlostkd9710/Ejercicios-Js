function testElse(val) {
    let result = "";
    if (val>5) {
        result = "Bigger than 5";
    }else{
        result = "5 Or Smaller";
    }
    return result;
}

console.log(testElse(4));
console.log(testElse(8));
console.log(testElse(5));