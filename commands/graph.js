const GraphDrawer = require("../lib/GraphDrawer");

const graph = {
  async graphCurr(cmd) {
    console.log(cmd.last);
    const graphDrawer = new GraphDrawer(cmd.last, cmd.base);
    const dataArr = await graphDrawer.returnArray();
    console.log(dataArr);
  }
};

module.exports = graph;
