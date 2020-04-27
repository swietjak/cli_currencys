const program = require("commander");
const key = require("../commands/key");

program
  .command("set")
  .description("Set API Key")
  .action(key.set);

program
  .command("show")
  .description("Shows API key")
  .action(key.show);

program
  .command("remove")
  .description("Removes API Key")
  .action(key.remove);

program.parse(process.argv);
