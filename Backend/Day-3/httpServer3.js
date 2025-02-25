const http = require("http");
const port = 3000;
const server = http.createServer(async(req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    const data = await fetch("https://dummyjson.com/recipes");
    const datajson = await data.json();
    const newdata = datajson.recipes;
    const names = newdata.map((re)=>{
        return re.name;
    })
    res.end(JSON.stringify(names)); // here we can't use toString method to convert the array into string
})

server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`Server is Running on Port: ${port}`)
    }
    catch(err){
        console.log("Error Message : ", err.message)
    }
})