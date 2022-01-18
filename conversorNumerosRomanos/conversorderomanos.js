function convertToRoman(num) {
    let resultado;
    let unidades,decenas,centenas,millar;
    let array = [];
    let array1 = [];
    let pos=0;
    do {
        resultado   = num % 10;
        array[pos]=parseInt(resultado);
        num = num/ 10;
        pos = pos +1;
    } while (num>1 || num==1);

    for (let i = 0; i < array.length; i++) {
/*         console.log(array[i]); */
        switch (i) {
            case 0:
                unidades = array[0];
                break;
            case 1:
                decenas = array[1];
                break;
            case 2:
                centenas = array[2];
                break;
            case 3:
                millar = array[3];
                break;
        }
    }
    /* millar */
    switch (millar) {
        case 1:
            array1[0]="M";
            break;
        case 2:

            array1[0]="MM";
            break;
        case 3:

            array1[0]="MMM";
            break;
    }
    /* centenas */
    switch (centenas) {
        case 1:

            array1[1]="C";
            break;
        case 2:

            array1[1]="CC";
            break;
        case 3:

            array1[1]="CCC";
            break;
        case 4:

            array1[1]="CD";
            break;
        case 5:
            ;
            array1[1]="D";
            break;
        case 6:
            ;
            array1[1]="DC";
            break;
        case 7:

            array1[1]="DCC";
            break;
        case 8:
            array1[1]="DCCC";
            break;
        case 9:
            array1[1]="CM";
            break;

    }
    /* decenas */
    switch (decenas) {
        case 1:
            array1[2]="X";
            break;
        case 2:
            ;
            array1[2]="XX";
            break;
        case 3:

            array1[2]="XXX";
            break;
        case 4:

            array1[2]="XL";
            break;
        case 5:

            array1[2]="L";
            break;
        case 6:
            array1[2]="LX";
            break;
        case 7:
            array1[2]="LXX";
            break;
        case 8:
            
            array1[2]="LXXX";
            break;
        case 9:
            
            array1[2]="XC";
            break;
    }/* unidades */
    switch (unidades) {
        case 1:

            array1[3]="I";
            break;
        case 2:

            array1[3]="II";
            break;
        case 3:

            array1[3]="III";
            break;
        case 4:

            array1[3]="IV";
            break;
        case 5:
            array1[3]="V";
            break;
        case 6:

            array1[3]="VI";
            break;
        case 7:
            console.log("VII");
            array1[3]="VII";
            break;
        case 8:
            array1[3]="VIII";
            break;
        case 9:
            array1[3]="IX";
            break;
    }
    num = array1.join('');
    console.log(num);
    return num
}

/* convertToRoman(134746) */
convertToRoman(1000);
convertToRoman(2000);
convertToRoman(3000);
convertToRoman(3999);