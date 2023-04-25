// import express
const express = require('express');

// import cors
const cors = require('cors');

// import country controller
const countryController = require('./src/controllers/countryController');

// create express app
const app = express();

// use cors
app.use(cors());

// get country by name
app.get('/country/:name', countryController.getCountryByName);

app.get('/countries', countryController.getAllCountriesNamesWithFlag);

// start express server for heroku
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

