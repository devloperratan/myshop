const express = require('express')
const dbConfig = require('./src/config/db')
const productRoutes = require('./src/routes/productRoutes')
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extends: false }))

app.use(bodyParser.json())

dbConfig()

app.use('/api/v1', productRoutes)

app.listen(port, () => {
    console.log(`app listen on ${port}`)
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));