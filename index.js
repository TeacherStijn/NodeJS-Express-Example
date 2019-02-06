const express = require('express');
const app = express();

app.get(['/', 'index.html'], (req, res) => {
	// kort: res.send('Hello World!'));
	res.sendFile(__dirname + '/index.html');
});

app.get('/gettest', (req, res) => {
	res.send('Dank voor het opvragen van de gettest');
});

app.post('/posttest', (req, res) => {
	console.dir(req);
	res.send('Je hebt het volgende opgestuurd: ' + req);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));