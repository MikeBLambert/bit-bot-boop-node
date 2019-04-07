require('dotenv').config();

const GDAX = require('gdax');
// const publicClient = new GDAX.PublicClient();
console.log('my api key: ', process.env.GDAX_API_KEY);

const authenticatedClient = new GDAX.AuthenticatedClient(
  process.env.GDAX_API_KEY,
  process.env.GDAX_SECRET,
  process.env.GDAX_PASSPHRASE,
  'https://api.pro.coinbase.com'
);

const callback = (error, response, data) => {
  if (error) return console.dir(error);
  return console.dir(data);
};

// const getCurrencies = publicClient.getCurrencies(callback);

const getAccounts = authenticatedClient.getAccounts(callback);
console.log(getAccounts);

const currencies = [];
const getBuyPrices = () =>
  authenticatedClient.getAccounts(function(err, res, currency) {
    currency.forEach(element => {
      console.log(element);
      currencies.push(element);
    });
  });
module.exports = { getAccounts, currencies };
