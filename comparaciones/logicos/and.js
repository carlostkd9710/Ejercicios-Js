function testLogicalAnd(val) {
    if (val>=25 && val<=55) {
        return " yes"
    }
    return "No"
}

console.log(testLogicalAnd(10));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(100));