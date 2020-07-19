// importat la librerias
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// use metodos de libs
const app = express()
require('dotenv').config()


// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


// database connect mongodb
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => { console.log("base de datos conected")})


//config de routes
app.use('/api/category', require('./routes/category')) 
app.use('/api/videogame', require('./routes/videogame')) 

//listen server PORT
const port = process.env.PORT
app.listen(port, () => {
    console.log(`servidor conected en el port ${port}`);
})

