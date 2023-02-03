class sample{
    samplehello(){
        console.log("sample hello")
    }
}

class hello extends sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    hello(){
        console.log('hello friends : '+(this.num1+this.num2));
    }
}
let hey=new hello(10,20)
hey.hello()
hey.samplehello()