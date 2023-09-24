// access modifiers : public, private, protected, readonly

class User {
    // properties, methods, constructor

    public userName: string;
    public age: number;


    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`User Name : ${this.userName}, Age : ${this.age}`);
    };
}


class Student extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`User Name : ${this.userName}, Age : ${this.age}, Id : ${this.studentId}`);
    }

    setStudentId(studentId: number): void {
        this.studentId = studentId;
    }
    getStudentId(): number {
        return this.studentId;
    }
}

let st1 = new Student("Biplob", 28, 101);
st1.setStudentId(1010);
console.log(st1.getStudentId());
st1.display();

let user1 = new User("Sayan", 27);
user1.userName = "Shithi";
user1.age = 25;
console.log(user1);