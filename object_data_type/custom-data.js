var usersInfo;
usersInfo = [];
var userInfo1;
userInfo1 = { userName: "Biplob", userId: 101 };
usersInfo.push(userInfo1);
var userInfo2;
userInfo2 = { userName: "Shithi", userId: 102 };
usersInfo.push(userInfo2);
var userInfo3;
userInfo3 = { userName: "Sagor", userId: 103 };
usersInfo.push(userInfo3);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
