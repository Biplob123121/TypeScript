type User = { userName: string, userId: number };

let usersInfo: User[];
usersInfo = [];

let userInfo1: User;
userInfo1 = { userName: "Biplob", userId: 101 };
usersInfo.push(userInfo1);

let userInfo2: User;
userInfo2 = { userName: "Shithi", userId: 102 };
usersInfo.push(userInfo2);

let userInfo3: User;
userInfo3 = { userName: "Sagor", userId: 103 };
usersInfo.push(userInfo3);

// console.log(usersInfo);

type RequestType = "GET" | "POST";

let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType: RequestType) {
    console.log(requestType);
}

requestHandler("GET");