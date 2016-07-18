var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://leo:leo1970@ds042698.mlab.com:42698/series', function (err,db) {
	if (err) throw err;
	exports.cargarTitulo = function (data) {
		db.collection ('titulos')
			.find()
				.toArray (function (err,results) {
					data(results)
				})
	};
	exports.cargarTemporada = function (ct,data) {
		db.collection ('temporadas')
			.find()
				.toArray (function (err,results) {
					data(results)
				})
	};
	exports.cargarCapitulo = function (cd,data) {
		db.collection ('capitulos')
			.find()
				.toArray (function (err,results) {
					data(results)
				})
	}
})

