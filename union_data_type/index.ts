let userId: string | number|boolean;

userId = '101';
userId = 101;
userId=true;

function displayInfo(userId:string|number){
    console.log(userId);
}

displayInfo(101);
displayInfo("101");

