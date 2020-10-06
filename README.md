# cli_currencys
Tool for displaying current currency prices and drawing its charts in terminal. Created with NodeJS, CommanderJS and GraphDrawerJS.
API used: https://exchangeratesapi.io/
## Set up
```
npm install

npm link
```
## Usage
```
# Currency Check Command
coindex check price

# Check Specific Currency (default: EUR)
coindex check --coin=USD

# Graph Currency (Default: EUR)
coindex check --base=USD
```
Based on TraversyMedia's crypto currencies project.
https://github.com/bradtraversy/coindex-cli
