const path = require('path')
const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

connectDB()

const app = express()

var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/weather', require('./routes/weatherRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../Client/dist')))

  app.get('*', (req, res)=> res.sendFile(path.resolve(__dirname, '../',
  'Client','dist', 'index.html')))
}else{
  app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler)

app.listen(PORT, () => {console.log("Server started on port "+PORT)});