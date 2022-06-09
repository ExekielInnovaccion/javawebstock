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

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.end('<H1>Hola Mundo!!!</H1>');
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});