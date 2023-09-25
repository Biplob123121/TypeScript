interface IUser { id: number, name: string, age: number };

let users: IUser[] = [];

const user1: IUser = {
    id: 1,
    name: "Biplob",
    age: 28
}

const user2: IUser = {
    id: 2,
    name: "Shithi",
    age: 25
}

users.push(user1);
users.push(user2);

const printUserInfo = (user: IUser) => {
    console.log(`userId : ${user.id}, userName : ${user.name}, userAge : ${user.age}`);
}

users.forEach(user => printUserInfo(user));