const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 4000;
const productsModel = require('./products.model');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.post('/storeProducts', async(req, res) => {

    try {
        let products = await productsModel.create({
            name: req.body.name,
            products: req.body.products
        })
    } catch (err) {
        console.log(err)
    }
})
app.get('/getAll', async(req, res) => {

    try {
        const products = await productsModel.find()

        res.json(products)
    } catch (err) {
        console.log(err)
    }
})
app.get('/getProduct/:id', async(req, res) => {
    try {
        const { id } = req.params;

        const product = await productsModel.findById(id)

        res.json(product)
    } catch (err) {
        console.log(err)
    }
})
app.delete('/deleteProduct/:id', async(req, res) => {
    try {
        const { id } = req.params;

        const product = await productsModel.deleteOne({ _id: id })

        res.json(product)
    } catch (err) {
        console.log(err)
    }
})
