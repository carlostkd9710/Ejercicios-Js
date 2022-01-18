function telephoneCheck(str) {
  let re = /^[1-9]\d{9}$|^[1-9]\d{2}-[0-9]\d{2}-[0-9]\d{3}$|^\([1-9]\d{2}\)[0-9]\d{2}-[0-9]\d{3}$|^\([1-9]\d{2}\)\s[0-9]\d{2}-[0-9]\d{3}$|^[1-9]\d{2}\s[0-9]\d{2}\s[0-9]\d{3}$|^[1]\s[0-9]\d{2}\s[0-9]\d{2}\s[0-9]\d{3}$|^[1]\s[0-9]\d{2}-[0-9]\d{2}-[0-9]\d{3}$|^[1]\s\([0-9]\d{2}\)\s[0-9]\d{2}-[0-9]\d{3}$|^[1]\([0-9]\d{2}\)[0-9]\d{2}-[0-9]\d{3}$/g;
  console.log(str.match(re));
  if (str.match(re)) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
telephoneCheck("1 555 555 5555");