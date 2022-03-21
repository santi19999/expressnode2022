const Url = require('../models/Urls');
const leerUrls = async (req, res) => {
	const urls = [
		{ origin: 'www.google.com/santiagoherreragauna', shortURL: 'santihg' },
		{ origin: 'www.google.com/denisherreragauna', shortURL: 'denishg' },
		{ origin: 'www.google.com/martinasoledadherrera', shortURL: 'martihg' },
	];
	res.render('home', { urls: urls });
};
const agregarUrl = async (req, res) => {
	const { originURL } = req.body;
	try {
		const url = new Url({ origin: originURL });
		await url.save();
		res.redirect('/');
	} catch (error) {
		console.log(error);
		res.send('error, algo sucedió');
	}
};
module.exports = {
	leerUrls,
	agregarUrl,
};
