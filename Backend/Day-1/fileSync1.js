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
    try {
        fs.writeFileSync("dummy.txt", data); // write returns undefine
        console.log("Successfully Written File");
    }
    catch (err) {
        console.log("File Writing Error", err.message);
    }
}
const myAppendFile = (data) => {
    try {
        fs.appendFileSync("dummy.txt", data);
        console.log("Appended Data Successfully");
    }
    catch (err) {
        console.log("File Appending Error", err.message);
    }
}

const myDeleteFile = (filename) => {
    try {
        fs.unlinkSync(filename);
        console.log("Data Deleted Successfully");
    }
    catch (err) {
        console.log("File Deletion Error", err.message);
    }
}

module.exports = {
    myReadFile : myReadFile,
    myWriteFile : myWriteFile,
    myAppendFile : myAppendFile,
    myDeleteFile : myDeleteFile,
    usernmae : "Aditya",
}
