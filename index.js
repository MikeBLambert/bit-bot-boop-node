require('dotenv').config();
const connect = require('./lib/utils/connect');
const Exchange = require('./lib/models/Exchange');
const GDAX = require('gdax');

// connect();

const authenticatedClient = new GDAX.AuthenticatedClient(
  process.env.GDAX_API_KEY,
  process.env.GDAX_SECRET,
  process.env.GDAX_PASSPHRASE,
  'https://api.pro.coinbase.com'
);

const uglyGetPrices = () => {
  return new Promise((resolve, reject) => {
    authenticatedClient.getProductTicker('ETH-USD', (error, response, data) => {
      reject(error);
      resolve(data);
    });
  });
};
console.log(uglyGetPrices());

// const getPrices = () => {
//   return new Promise((resolve, reject) => {
//     authenticatedClient.getProductTicker(
//       'ETH-USD',
//       unwrapResponse(resolve, reject)
//     );
//   });
// };
// console.log('get prices:', getPrices);

const comparePrices = async () => {
  const cb = await uglyGetPrices();
  console.log('our cb: ', cb);
};
// const unwrapResponse = (resolve, reject) => {
//   return (err, response, data) => {
//     err || !response
//       ? reject(err || new Error('Nothing happened!'))
//       : resolve(data);
//   };
// };
comparePrices();
