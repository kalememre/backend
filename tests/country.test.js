const countryService = require('../src/services/countryService');
const countryController = require('../src/controllers/countryController');

jest.mock('../src/services/countryService');

describe('getCountryByName', () => {
  it('should return the country with the given name', async () => {
    const expectedCountry = { name: 'Turkey', capital: 'Ankara', population: 83000000 };
    countryService.getCountryByName.mockResolvedValue(expectedCountry);
    const req = { params: { name: 'Turkey' } };
    const res = { json: jest.fn() };

    await countryController.getCountryByName(req, res);

    expect(countryService.getCountryByName).toHaveBeenCalledWith('Turkey');
    expect(res.json).toHaveBeenCalledWith(expectedCountry);
  });

  it('should return a 500 error if an error occurs', async () => {
    const errorMessage = 'An error occurred';
    countryService.getCountryByName.mockRejectedValue(new Error(errorMessage));
    const req = { params: { name: 'InvalidCountry' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await countryController.getCountryByName(req, res);

    expect(countryService.getCountryByName).toHaveBeenCalledWith('InvalidCountry');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});
