;
var users = [];
var user1 = {
    id: 1,
    name: "Biplob",
    age: 28
};
var user2 = {
    id: 2,
    name: "Shithi",
    age: 25
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userId : ".concat(user.id, ", userName : ").concat(user.name, ", userAge : ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
