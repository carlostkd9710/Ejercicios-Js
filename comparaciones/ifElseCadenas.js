function testSize(num) {
    if (num<5) {
        return "Tiny";
    } else if(num<10){
        return "Small";
    }else if (num<15) {
        return "Medium";
    } else if(num<20){
        return "Large";
    }else if (num>=20) {
        return "Huge";
    }
}

console.log(testSize(4));
console.log(testSize(8));
console.log(testSize(14));
console.log(testSize(18));
console.log(testSize(20));