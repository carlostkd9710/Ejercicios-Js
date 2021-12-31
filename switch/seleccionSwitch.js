function caseSwitch(val) {
    let answer = "";
    answer = ["alpha","beta","gamma","delta"]
    switch (val) {
        case 1:
            return answer[0];
            break;
        case 2:
            return answer[1];
            break;
        case 3:
            return answer[2];
            break;
        case 4:
            return answer[3];
            break;
    }
}

console.log(caseSwitch(1));
console.log(caseSwitch(2));
console.log(caseSwitch(3));
console.log(caseSwitch(4));