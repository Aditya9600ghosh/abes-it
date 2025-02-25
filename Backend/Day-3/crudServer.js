const http = require("http");
const server = http.createServer((req,res)=>{
    const data = [{
        id:1,
        name:"Aditya",
        email:"aditya@gmail.com",
    }]
    const url = req.url;
    if(url=="/users" && req.method=="GET"){ // here url is having users thats why use "localhost:3001/users"
        res.writeHead(200,{"content-type":"application/json"});
        const obj = data.map((i)=>{
            return {id:i.id, name:i.name, email:i.email};
        })
        res.end(JSON.stringify(obj));
    }
    else if(url=="/user" && req.method=="POST"){ // here url is having users thats why use "localhost:3001/users"
        res.statusCode = 200;
        let body = '';
        req.on("data",(d)=>{
            body+=d.toString();
        })
        req.on("end",()=>{
            const length = data.length; // starting length is 1
            const newid = data[length-1].id; // here length-1 is used because we have array index from 0
            const jsonbody = JSON.parse(body); // use to convert the data back to json from string
            const {name,email} = jsonbody;
            const newdata = {
                id:newid,
                name,
                email
            }
            data.push(newdata);
        })
    }
    else{
        res.writeHead(200,{"content-type":"text/html"});
        res.end("page not found");
    }
})

server.listen(3001,()=>{
    console.log("server is running on port 3001");
})