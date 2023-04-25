const countryService = require('../services/countryService');

const getCountryByName = async (req, res) => {
    const { name } = req.params;
    try {
        const country = await countryService.getCountryByName(name);
        res.json(country);
    } catch (error) {
        if (error.message == 404) {
            res.status(404).json({ message: 'Country not found' });
        }
        else {
            res.status(500).json({ message: error.message });
        }
    }
};

const getAllCountriesNamesWithFlag = async (req, res) => {
    try {
        const countries = await countryService.getAllCountriesNamesWithFlag();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCountryByName,
    getAllCountriesNamesWithFlag
};