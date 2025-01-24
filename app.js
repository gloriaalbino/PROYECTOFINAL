require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

//Conexion a la BD 
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log('Conexion a BD correcta')
    } catch(error) {
        console.log(error)
    }

//crear rutas de frontend
app.use('/',express.static(path.resolve('views','home')))
app.use('/principal', express.static(path.resolve('views', 'principal')))
app.use('/sesion', express.static(path.resolve('views', 'sesion')))
app.use('/registro', express.static(path.resolve('views', 'registro')))
app.use('/ficha', express.static(path.resolve('views', 'ficha')))
app.use('/img', express.static(path.resolve('img')))
app.use('/icons', express.static(path.resolve('icons')))


module.exports = app