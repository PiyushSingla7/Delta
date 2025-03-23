class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject,salary){
        super(name,age);
        this.subject=subject;
        this.salary=salary;
    }
}

let p1=new Person("adam",21);
let stu1=new Student("mohan",22,80);
let tea1=new Teacher("shanti",32,"maths",10000);



