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


// connect to DB 
mongoose.connect('mongodb://anaomart:omarashraf@ac-3cjch4l-shard-00-00.49mdvgj.mongodb.net:27017,ac-3cjch4l-shard-00-01.49mdvgj.mongodb.net:27017,ac-3cjch4l-shard-00-02.49mdvgj.mongodb.net:27017/?ssl=true&replicaSet=atlas-j20wdy-shard-0&authSource=admin&retryWrites=true&w=majority', () => console.log('Connect to database '))


app.listen(PORT, () => console.log('Listening on : ' + PORT))