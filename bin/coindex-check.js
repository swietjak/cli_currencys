const program = require("commander");
const check = require("../commands/check");

program
  .command("price")
  .description("Check price of coins")
  .option("--currency <type>", "Add specific coin currency", "EUR")
  .action(cmd => check.price(cmd));

program.parse(process.argv);
