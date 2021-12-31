function testGreaterOrEqual(val){
    if(val>=20){
        return "20 Or Over";
    }
    if (val>=10) {
        return "10 Or Over";
    }
    return "Less Than 10";
}

console.log(testGreaterOrEqual(21));
console.log(testGreaterOrEqual(12));
console.log(testGreaterOrEqual(9));