function myLocalScope(){
    const myVar = 8;
    console.log('inside myLocalScope',myVar);
}
myLocalScope();
console.log('outside myLocalScope',myVar);
