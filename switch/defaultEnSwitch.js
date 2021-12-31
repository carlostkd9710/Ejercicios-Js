function switchOfStuff(val) {
    let answer="";
    answer = ["apple","bird","cat","stuff"]

    switch (val) {
        case "a":
            return answer[0];
            break;
        case "b":
            return answer[1];
            break;
        case "c":
            return answer[2];
            break
        default:
            return answer[3];
            break;
    }

}

console.log(switchOfStuff(1));
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));