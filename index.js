const express = require('express');
const app = express();

const HomeController = require('./controllers/HomeController');

const PORT = process.env.PORT;

app.get('/', HomeController.index);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`)
});