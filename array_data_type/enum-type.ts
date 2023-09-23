// enum sotre constant, duplicate value is not allowed here
// enum types : numeric, string, hetergenous


// numeric enum

enum RequestType {
    readData,
    saveData,
    deleteData,
}

console.log(RequestType);


// string enum

enum RequestType2 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
}

console.log(RequestType2);
console.log(RequestType2.deleteData);
console.log(RequestType2["readData"]);

// hetergenous enum

enum RequestType3 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
    id = 101,
}