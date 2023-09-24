class User {
    // properties, methods, constructor

    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`User Name : ${this.userName}, Age : ${this.age}`);
    }
}


// class object

let user1 = new User("Biplob Kumar", 28);
user1.display();

let user2 = new User("Shithi Sarker", 25);
user2.display();