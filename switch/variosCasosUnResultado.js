function sequentialSizes(val) {
    let answer ="";
    answer = ["Low","Mid","High"]
    switch (val) {
        case 1:
        case 2:
        case 3:
            return answer[0];
            break;
        case 4:
        case 5:
        case 6:
            return answer[1];
            break;
        case 7:
        case 8:
        case 9:
            return answer[2];
            break;
    }
}

console.log(sequentialSizes(2));
console.log(sequentialSizes(5));
console.log(sequentialSizes(8));