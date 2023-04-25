const axios = require('axios');
const Country = require('../models/countryModel');
require('dotenv').config();

class CountryService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    async getCountryByName(countryName) {
        try {
            const response = await axios.get(`${this.apiUrl}/name/${countryName}/?fullText=true`);
            const countryData = response.data[0] || {};
            const country = Country.mapCountryData(countryData);
            return country;
        } catch (error) {
            throw new Error(error.response.status);
        }
    }

    async getAllCountriesNamesWithFlag() {
        try {
            const response = await axios.get(`${this.apiUrl}/all`);
            const countries = response.data.map((country) => {
                return {
                    name: country.name.common,
                    flag: country.flag,
                };
            });
            return countries;
        } catch (error) {
            throw new Error(error.response.status);
        }
    }
}

module.exports = new CountryService(process.env.API_URL);
