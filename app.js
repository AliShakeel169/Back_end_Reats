//this file is the entry point of the application
//it makes use of several other files in this package to be able to
//create a server on the localhost, connect to a remote MongoDB database
//monitor requests made and respond to these requests 


//imports
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {router} = require('./routes/api')
const dotenv = require('dotenv')
dotenv.config()

//setting up the database
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log('DB Connected!'))
.catch((error) => console.log(error))

//creating the server
const app = express()

//setting up middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(router)

//listening on port
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Node JS API listening on port', port))
