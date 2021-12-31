function palindrome(str) {

    let palabra = str.toLowerCase().replace(/[\W_]/g,"");
    let reversa = palabra.split("").reverse().join("");
    if(reversa === palabra){
        return true;
  }else{
    return false;
  }
}palindrome("eye")
/*   console.log(palindrome("eye"))  //True
  console.log(palindrome("amorroma"))//True
  console.log(palindrome("eyes"))//false
  console.log(palindrome("amoR roMa"))//True
  console.log(palindrome("_/amoR8roMa"))//True */