const axios = require("axios");
const asciichart = require("asciichart");
const colors = require("colors");

class GraphDrawer {
  constructor(sizeOfArr, base) {
    this.dataArr = [];
    this.deltat = 86400000;
    this.today = Date.now();
    this.sizeOfArr = parseInt(sizeOfArr);
    this.baseUrl = `https://api.exchangeratesapi.io/history?base=${base}&symbols=PLN&start_at=`;
  }

  returnDate(timeMil) {
    let date = new Date(timeMil);
    let dateStr = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;
    return dateStr;
  }

  async getCurrData() {
    try {
      let today = this.returnDate(this.today);
      let past = this.returnDate(this.today - this.sizeOfArr * this.deltat);
      let res = await axios.get(this.baseUrl + past + "&end_at=" + today);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async sortData(res) {
    for (let key in res) {
      this.dataArr.push(key);
    }
    this.dataArr.sort();
    this.dataArr = this.dataArr.map(key => res[key].PLN);
  }

  async returnArray() {
    let data = await this.getCurrData();
    this.sortData(data.rates);
    var output;
    if (this.dataArr.slice(-1)[0] > this.dataArr[0])
      output = asciichart.plot(this.dataArr, { height: 20 }).red;
    else if (this.dataArr.slice(-1)[0] < this.dataArr[0])
      output = asciichart.plot(this.dataArr, { height: 20 }).green;
    else output = asciichart.plot(this.dataArr, { height: 20 }).grey;
    return output;
  }
}

module.exports = GraphDrawer;
