function hey(){
    var i=0;
    if(i===0){
        var hey=20;
        let h=30;//it only can call in this block only not possible to call inside the metod it won't work
        console.log(h)
    }
    console.log(hey)
}
console.log(hey)//it cant call because hey is only accessible inside the function(only for "var" variable)
hey()