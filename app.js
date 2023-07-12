const express = require('express');
const response = require('./response.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/dummy', (req, res) => {
	res.set({
		test: 'test',
	});
	res.json(response);
});

app.post('/dummy', (req, res) => {
	fs.writeFile(
		'requestBody.json',
		JSON.stringify(req.body),
		'utf-8',
		(err, data) => {
			console.log(err);
		}
	);
	res.set({
		test: 'test',
	});
	res.json(response);
});

app.listen(3001);
