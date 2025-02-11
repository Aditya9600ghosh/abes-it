const {myReadFile, myWriteFile, myAppendFile, myDeleteFile,usernmae} = require("./fileSync1");
myReadFile();
const data = " Today's Backend Class";
myWriteFile(data);
myReadFile();
myAppendFile(data);
myReadFile();
myDeleteFile("dummy.txt");
console.log("User Name = ", usernmae);