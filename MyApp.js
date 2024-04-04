const express = require('express');
const app = express();
var path = require("path")


app.set("view engine","ejs")

app.use(express.static('public'));


app.get ("/home",(req, res)=>{
  res.render("index");
})

app.listen(3001, (req, res) => {
  console.log('Servidor web escuchando en el puerto 3001');
});


 


