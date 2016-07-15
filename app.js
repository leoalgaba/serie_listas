var express = require('express');
var app = express();

// Usamos Jade y marcamos la ruta
app.set ('view engine', 'jade');
app.set ('views', __dirname + '/views');

//Middleware
app.use (express.static(__dirname + '/public'));
// Prueba para Jade
app.get('/', function (req,res) {
	res.render('index')
});
//servidor
app.listen(3000, function () {
		console.log("El servidor esta corriendo en el puerto 3000");
})

