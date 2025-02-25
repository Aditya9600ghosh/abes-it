const express = require('express');
const app = express();
const port = 3001;

const products = [{
    id: 1,
    productName: "Parle-G",
    price: 100,
    quantity: 100,

},
{
    id: 2,
    productName: "Haldiram Bhujia",
    price: 150,
    quantity: 50,
}
    , {
    id: 3,
    productName: "Kurkure",
    price: 25,
    quantity: 150,
}]

app.use(express.json());

//GET API
app.get("/products", (req, res) => {
    res.status(200).json(products);
})

app.get("/product/:id",(req,res)=>{
    const pid = req.params.id;
    const index = products.findIndex(ind=>ind.id==pid);
    if(index==-1){
        res.status(400).json({status:"failed",message:"product id not found"});
    }
    else{
        res.status(200).json({status:"success",message:"product id found",data:products[index]});
    }
})

//POST API
app.post("/product", (req, res) => {
    const { productName, price, quantity } = req.body;

    if (!productName || !price || !quantity) {
        res.status(400).json({ status: "failed", message: "All fields are required" });
    }
    else {
        // const newId = products.length > 0 ? (products[products.length - 1].id + 1) : 1;

        const uniqueId = Math.floor(100000 + Math.random() * 900000); //generates random Id using random
        const newProduct = {
            id: uniqueId, productName, price, quantity
        }
        products.push(newProduct);
        res.status(201).json({ status: "success", message: "New Product added successfully", newProduct })
    }
})

app.listen(port, (err) => {
    try {
        if (err) throw err;
        console.log(`Server is running on port ${port}`);

    }
    catch (err) {
        console.log("Server error: ", err.message);


    }



})