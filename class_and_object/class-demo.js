var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("User Name : ".concat(this.userName, ", Age : ").concat(this.age));
    };
    return User;
}());
// class object
var user1 = new User("Biplob Kumar", 28);
user1.display();
var user2 = new User("Shithi Sarker", 25);
user2.display();
