const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key ",
        validate: input => (input === "" ? "This value is required".red : true)
      }
    ]);

    const key = keyManager.setKey(input.key);
    if (key) {
      console.log("API Key has been set".green);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log(key);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.removeKey();
    } catch (err) {
      console.error(err.message.red);
    }
  }
};

module.exports = key;
