// built in data type : number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let fullName: string;
let lastName: string;
let isActive: boolean;

userId = 101;
firstName = 'Biplob';
lastName = " Kumar";
isActive = true;

fullName = firstName.concat(lastName);

console.log(`User ID: ${userId}, User Name : ${fullName}, Active Status: ${isActive}`);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display(): void {
    console.log('Hi, I am display.')
}

display();