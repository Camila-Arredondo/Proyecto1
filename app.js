const http = require('http');
const express = require('express');
const app = express();//crea una instancia de una aplicación de Express mediante la invocación de este método
const PORT = 4200;

app.use(express.json());


app.get('/hello', (req, res) => {
    // handle the request
    console.log("llego get");

    res.send('Hola')
  });
  
  app.post('/hello', (req, res) => {
    const nombre= req.body.nombre;
    console.log("llego post");
    res.send('Hola ' + nombre)
  });

  //para iniciar la app
  app.listen(PORT, () => 
  console.log(`Example app listening on port ${PORT}!`));