// create Country model

class Country {
    constructor(name, capital, population, flag, flags, languages, area, currencies, timezones,) {
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.flag = flag;
        this.flags = flags;
        this.languages = languages;
        this.area = area;
        this.currencies = currencies;
        this.timezones = timezones;
    }

    static mapCountryData(countryData) {
        return new Country(
            countryData.name.common,
            countryData.capital?.[0] || '',
            countryData.population || 0,
            countryData.flag,
            countryData.flags,
            countryData.languages,
            countryData.area,
            countryData.currencies,
            countryData.timezones,
        );
    }
}

module.exports = Country;