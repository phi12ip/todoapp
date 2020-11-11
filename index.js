const express = require('express');

const app = express();

const HomeController = require('./controllers/HomeController');

app.get('/', HomeController.index);

app.listen(3000, () => {
    console.log('App listening on port 3000...')
});