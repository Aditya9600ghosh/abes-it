const fs = require("node:fs");
function myReadFile() {
    try {
        const data = fs.readFileSync("dummy.txt", "utf-8"); // instead of toString method you can use to set the read method like utf-8
        console.log("File Data : ", data);
        // console.log("File Data : ", data.toString()); // one method to convert the hexadecimal data into string format
    }
    catch (err) {
        console.log("File Reading error", err.message);
    }
}
const myWriteFile = (data) => {
    try{
        fs.writeFileSync("dummy.txt",data); // write returns undefine
        console.log("Successfully Written File");
    }
    catch(err){
        console.log("File Writing Error", err.message);
    }
}
myReadFile();
myWriteFile("I am a Software Engineer");
myReadFile();