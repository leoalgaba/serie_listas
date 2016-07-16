var mod = require('../models/series');

module.exports = exports = {
	index:function (req, res) {
		res.render("index")
	},
	titulo:function (req, res) {
		mod.cargarTitulo(function (data) {
			res.json(data);
		})
	},
	temporada:function (req, res) {
		var ct = req.params.ct;
		mod.cargarTemporada(ct, function (data) {
			res.json(data);
		})
	},
	capitulo:function (req, res) {
		var cd = req.params.cd;
		mod.cargarCapitulo(cd, function (data) {
			res.json(data);
		})
	}
}

