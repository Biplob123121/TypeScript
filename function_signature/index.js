var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Biplob Kumar is 28 years old.");
};
userInfo1();
userInfo2 = function (name) {
    console.log("My name is ".concat(name));
};
userInfo2("Biplob");
userInfo3 = function (name, age) {
    return "My name is ".concat(name, " and age ").concat(age, " years old.");
};
console.log(userInfo3("Biplob", 28));
