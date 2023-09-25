let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age:number) => string;

userInfo1 = () => {
    console.log("Biplob Kumar is 28 years old.");
}

userInfo1();

userInfo2 = (name: string) => {
    console.log(`My name is ${name}`);
}

userInfo2("Biplob");

userInfo3 = (name: string, age:number) => {
    return `My name is ${name} and age ${age} years old.`;
}

 console.log(userInfo3("Biplob", 28));