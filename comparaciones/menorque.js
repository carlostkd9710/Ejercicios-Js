function testLessThan(val){
    if (val<25) {
        return "Under 25";
    }
    if(val<55){
        return "under 55";
    }
    return "55 Or over";
}

console.log(testLessThan(10));
console.log(testLessThan(30));
console.log(testLessThan(60));