require('dotenv').config();
const connect = require('./lib/utils/connect');
const Exchange = require('./lib/models/Exchange');
connect();


const testDbCall = () => Exchange.create({
    name: 'Coinbase',
    fees: {
        txCost: 15,
        transferCost: 5
    }
});

testDbCall();



















// const getBuyPrices = () => {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const str = 'first';
//             resolve(str);
//         }, 3000);
//     });
// };

// const getSellPrices = () => {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const str2 = 'second';
//             resolve(str2);
//         }, 1000);
//     });
// };

// getBuyPrices()
//     .then(res => {
//         console.log(res);
//     })
//     .then(() => getSellPrices())
//     .then(res => console.log(res));
