function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name:"+this.name+"Age:"+this.age)
    }
}
var a=new person("joswin ", 20,"elanji")
var b=new person("jacob ", 13,"elanji")

a.display()
b.display()