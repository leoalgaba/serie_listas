var express = require('express');
var app = express();

var series = require('./routes/route.js');

// Usamos Jade y marcamos la ruta
app.set ('view engine', 'jade');
app.set ('views', __dirname + '/views');

//Middleware
app.use (express.static(__dirname + '/public'));
//rutas
app.get('/', series.index);
app.get('/db/titulo', series.titulo);
app.get('/db/temporada/:ct', series.temporada);
app.get('/db/capitulo/:cd', series.capitulo)
//servidor
app.listen(3000, function () {
		console.log("El servidor esta corriendo en el puerto 3000");
})

