function hey(){
    var i=0;
    if(i===0){
        var hey=20;
    }
    console.log(hey)
}
console.log(hey)//it cant call because hey is only accessible inside the function(only for "var" variable)
hey()