class Person {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }


    set setName(value) {
        this.name = value;
        
    }
    walk(){
        console.log(this.name + "  is walking!!!")
    }
}

class Programmer extends Person{
    constructor(name,language){
        super(name);
        this.language = language;
        }
     get getLanguage() {
        return this.language;
     } 
     set setLanguage(lang){
         this.language = lang;
       
     }
    
     writeCode(){
            console.log(`${this.name} is coding and he use ${this.language}!!!`)
  }

}

let programmer = new Programmer("viet anh", "js");
console.log(programmer)
console.log(programmer.language)
programmer.setLanguage = "python"
console.log(programmer)
console.log(programmer.getLanguage)
console.log(programmer.walk())
console.log(programmer.writeCode())
