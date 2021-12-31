let count =0;

function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }
    let apuesta ="";
    if(count>0){
        apuesta = " Bet"
    }else{
        apuesta = " Hold"
    }
    return(count+apuesta)
}
console.log(cc(10));
console.log(cc("J"));
console.log(cc("Q"));
console.log(cc("K"));
console.log(cc("A"));