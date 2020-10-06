const CurrAPI = require("../lib/CurrAPI");

const check = {
  async price(cmd) {
    const currAPI = new CurrAPI();
    let res = await currAPI.getPriceData(cmd.currency);
    console.log(res.cyan);
  }
};

module.exports = check;
