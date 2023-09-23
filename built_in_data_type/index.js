// built in data type : number, string, boolean, void, undefined, null
var userId;
var firstName;
var fullName;
var lastName;
var isActive;
userId = 101;
firstName = 'Biplob';
lastName = " Kumar";
isActive = true;
fullName = firstName.concat(lastName);
console.log("User ID: ".concat(userId, ", User Name : ").concat(fullName, ", Active Status: ").concat(isActive));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log('Hi, I am display.');
}
display();
