function rot13(str) {
    let strr ="";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) {
            strr += String.fromCharCode((str.charCodeAt(i)+13-65)%26+65);
        } else {
            strr += String.fromCharCode(str.charCodeAt(i));
        }
    }
return console.log(strr);;
}

rot13("ABC")
/* rot13("asde etg asf")
rot13("SERR ñkps PNZC")
 */