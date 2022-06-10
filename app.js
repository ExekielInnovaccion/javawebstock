const express =require('express')
const path=require('path')
const { nextTick } = require('process')
const { prototype } = require('stream')

require('dotenv').config()
const app =express()

app.use(express.static(path.join(__dirname,'public')))

//app.get('/',(    req , res ,next  )=>{
    //console.log('Peticion Recibida')
    //res.send('<h1>Hola Mundo!°!</h1>')
    //res.status(200).sendFile('ind ex.html',{root: __dirname})
    //next()  //next es fundamental si tuvieramos mas de 1 midlewhere
//})


const PORT =process.env.PORT

app.listen(PORT,()=>{
    console.log('Servidor escuchando en puerto ' + PORT)
}) 
