const express = require('express');
const app = express();
const path = require('path');


app.get('/', (request,response)=>{
    response.send('Welcome to this express server');
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})

app.get('/contact', (request,response)=>{
    response.sendFile(path.join(__dirname, 'contact.html'))
})

app.get('/home',(request,response)=>{
    response.sendFile(path.join(__dirname, 'home.html'))
})

app.listen(4000, ()=>{
    console.log('Server is listening on port:4000');
})
