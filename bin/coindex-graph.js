const program = require("commander");
const graph = require("../commands/graph");

program
  .command("currency")
  .description("Graph a currency's curve")
  .option("--base <type>", "Choose base", "EUR")
  .option("--last <size>", "Choose how many days should be plotted", "30")
  .action(cmd => graph.graphCurr(cmd));

program.parse(process.argv);
