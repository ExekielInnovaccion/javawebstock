
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')


const app = express()
console.log('Antres de conexion de mongo')

mongoose
.connect(
    `mongodb+srv://exeuser:${process.env.MONGO_DB_PASS}@cluster0.ztr4q.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((result)=>{
        console.log(result)
        app.listen(PORT,()=>{
            console.log('Servidor escuchando en puerto ' + PORT)
        })        
        console.log('Conexion Exitosa a Mongo DB')
    })
    .catch((err)=>console.log(err))

const productSchema=mongoose.Schema(
    {
        name:{type:String,require:true},
        price:Number,
    },
    {timestamps:true}
    
)
const Product= mongoose.model('Product',productSchema,)
    
app.use(express.json())

app.post('/api/v1/products',(req, res) => {
    //console.log('Peticion Recibida')
    //console.log({body:req.body})
    
    
/*     const newProduct= new Product({
        name:req.body.name,
        price:req.body.price,
    })   esto es igual a la linea de abajo
 */
    const newProduct= new Product(req.body)

    newProduct
    .save()
    .then((result)=>{
        res.status(201).json({ok:true})
    })
    .catch((err)=>console.log(err))

    
})

app.use(express.static(path.join(__dirname,'public')))
const PORT =process.env.PORT
//app.get('/',(    req , res ,next  )=>{
    //console.log('Peticion Recibida')
    //res.send('<h1>Hola Mundo!°!</h1>')
    //res.status(200).sendFile('ind ex.html',{root: __dirname})
    //next()  //next es fundamental si tuvieramos mas de 1 midlewhere
//})

