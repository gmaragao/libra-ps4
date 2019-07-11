const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RegisterController = require('./Controller/RegisterController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

mongoose.connect('mongodb://localhost:27017/libra', { useNewUrlParser: true });

app.get('/', (req, res) => {
  res.send('Teste');
});

app.post('/player', RegisterController.createPlayer);
