class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
}

const me = new Person("Carlos Mentaberry",32);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person("other");
console.log(other);

const somestudent = new Student("Charly", 32, "Computer Science");
console.log(somestudent.hasMajor());