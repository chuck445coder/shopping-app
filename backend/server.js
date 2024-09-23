import express from "express"
import { ConnectDB } from "./config/db.js"
import {Product} from "./models/productModel.js"
import dotenv from "dotenv"
import path from "path"
const app = express()
dotenv.config()
const port = process.env.PORT || 3000
const __dirname = path.resolve()
app.use(express.json())

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
app.post("/api/product", async function(req, res) {

    const product = req.body
    console.log(product)

    if (!product.name || !product.price || !product.image) {
        return res.status(404).json({ success: failed, message: "Please provides all field"})
    }
    const newProduct = Product(product)
    try {
        await newProduct.save()
        res.status(201).json({ success: true, data: newProduct })
    } catch(err) {
        res.status(500)
    }
    
})
app.delete("/api/product/:id", async (req, res) => {

    const {id } =req.params
    console.log(id)
    try {
        await Product.findByIdAndDelete(id)
        res.status(201).json({ success: true, message: "Product is deleted" })
    } catch(err) {
        console.log("product is not find")
        res.status(500)
    }
})
app.get("/api/product", async (req, res) => {
    try {
        const produtcs = await Product.find()
        res.status(200).json({ success: true, data: produtcs })
    } catch(err) {
        res.status(501)
    }
})
app.put("/api/product/:id", async (req, res) => {
    const {id} = req.params
    console.log(id)
    const valueUpdate = req.body
    try {
        const updateProduct = await Product.findByIdAndUpdate(id , valueUpdate, {new: true})
        console.log(updateProduct)
        res.status(200).json({ success: true, data: updateProduct})
    } catch(err) {
        res.status(500)
    }

})


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}
app.listen(port, function() {
    ConnectDB()
    console.log("app listeng at port: " + port)
})