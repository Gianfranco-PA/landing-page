const express = require("express")
const path = require('path')
const app = express()
const fs = require('fs');

function lectura(){
    let json =fs.readFileSync('./src/data.json');
    return JSON.parse(json)
}

function escribir(insertar){
    let data=lectura()
    data=[...data,insertar]
    let json = JSON.stringify(data);
    fs.writeFileSync('./src/data.json', json);
}


app.use(express.static(path.join(__dirname, "build")))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.get("/api/yorsh",(req, res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
    //lectura()
})

app.get("/api",(req, res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
    //escribir(data1)
})


app.listen(5000,()=>{console.log("Server funcionando....")})
