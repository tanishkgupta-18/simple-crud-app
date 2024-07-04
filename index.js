const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://admin:PGZPYx6HcCKdr9uy@backenddb.igpaiop.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('Connected to database!')
        app.listen(3000, (req, res) => {
            console.log('server is running...');
        })
    })
    .catch(() => {
        console.log('Connection failed!')
    })

    

// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Node Api Server");
});
