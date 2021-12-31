function testLessOrEqual(val) {
    if (val<=12) {
        return "Smaller Than or Equal To 12";
    }
    if (val<=24) {
        return "Smaller Than or Equal To 24";
    }
    return "More Than 24";
}

console.log(testLessOrEqual(10));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(30));