//npm init to initilaise the application
// import express from 'express' 
  // TODO: if we define the type here as "type" :"module" IN package.json we can import it in replace of require
const rout = require('./routers/stringRouter')
const jsonrout = require('./routers/jsonRouter')
const boolrout = require('./routers/booleanRouter')
const express = require('express')
const app = express()
const port = 2000


app.use('/user', rout)  //Using a route from stringRouter

app.use('/json', jsonrout) //Using a route from jsonRoute
app.use('/bool', boolrout)

app.get('/', (req, res)=>{
    res.status(200).send('Hello World i am here at /')// TODO: It will sent back to the frontend
})  
app.all('*', (req, res)=>{
    res.status(404).send('File Not Found')
})
app.listen(port, (err)=>{
    err?.console.log(`Listening on port number ${port}`)
})