abstract class User {
    // properties, methods, constructor

    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    abstract display(): void ;
}


class Student extends User {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`User Name : ${this.userName}, Age : ${this.age}, Id : ${this.studentId}`);
    }
}

let st1 = new Student("Biplob", 28, 101);
st1.display();