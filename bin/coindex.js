#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "Manage API key")
  .command("check", "Check price of currency")
  .command("graph", "Graph the curve of currency")
  .parse(process.argv);
