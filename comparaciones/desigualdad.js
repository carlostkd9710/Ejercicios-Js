function testNotEqual(val){
    if(val != 99){
        return "Not Equal";
    }
    return " Equal";
}

console.log(testNotEqual(10));
console.log(testNotEqual(99));