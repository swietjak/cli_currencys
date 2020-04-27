const axios = require("axios");
const colors = require("colors");

class CurrAPI {
  constructor() {
    this.baseUrl = "https://api.exchangeratesapi.io/latest?";
  }

  async getPriceData(currOpt) {
    try {
      const res = await axios.get(`${this.baseUrl}base=${currOpt}&symbols=PLN`);
      let price = Math.round(res.data.rates.PLN * 100) / 100;
      let output = `1 PLN = ${price} ${currOpt}`;
      return output;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = CurrAPI;
