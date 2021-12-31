function orderMyLogic(val) {
    if (val<10) {
        return "Less than 10";
    } else if(val < 5) {
        return "Less than 5";
    }else{
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(0));

function orderMyLogic1(val) {
    if (val>=10) {
        return "Greater than or equal to 10";
    } else if(val<5){
        return "Less than 5";
    }else{
        return "Less than 10";
    }
}

console.log(orderMyLogic1(0));