/* const express =require('express')
const app =express()

app.get('/',(    req , res   )=>{
    console.log('Peticion Recibida')
    res.send('<h1>Hola Mundo!°!</h1>')
})

app.listen(4000,()=>{
    console.log('Servidor escuchando en puerto 4000')

}) */
const http = require('http');
require ('dotenv').config()
const hostname = '127.0.0.1';
const PORT = process.env.PORT //|| 4000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log("Peticion Recibida")
//   res.setHeader('Content-Type', 'text/plain');
  //res.end('<H1>Hola Mundo!</H1>');
  res.status(200).sendfile('index.html')
});

server.listen(PORT, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${PORT}/`);
});