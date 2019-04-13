const GDAX = require('gdax');
//taker is an order that is inmediately fill and maker is an order that executes when a specific price is reach
const tradeFee = {
    takerTradeFee: 0.01,
    makerTradeFee: 0.01
};

const authenticatedClient = new GDAX.AuthenticatedClient(
    process.env.GDAX_API_KEY,
    process.env.GDAX_SECRET,
    process.env.GDAX_PASSPHRASE,
    'https://api.pro.coinbase.com'
);

const getCoinbaseQuote = async currencyPair => {
    if(!currencyPair) return;
    const price = await new Promise((resolve, reject) => {
        authenticatedClient.getProductTicker(
            currencyPair,
            unwrapPromise(resolve, reject)
        );
    });
    if(!price) return;

    const formattedQuote = {
        exchange: 'Coinbase',
        symbol: currencyPair,
        bid: price.bid,
        ask: price.ask,
        makerTradeFee: tradeFee.makerTradeFee,
        takerTradeFee: tradeFee.takerTradeFee
    };

    return formattedQuote;
};

const unwrapPromise = (resolve, reject) => {
    return (err, response, data) => {
        err || !response
            ? reject(err || new Error('Nothing happened!'))
            : resolve(data);
    };
};

const getCoinbaseTransactionFee = transactionAmount => {
    if(transactionAmount <= 10)
        return Math.max(transactionAmount * 0.0149, 0.99);
    if(transactionAmount > 10 && transactionAmount <= 25)
        return Math.max(transactionAmount * 0.0149, 1.49);
    if(transactionAmount > 25 && transactionAmount <= 50)
        return Math.max(transactionAmount * 0.0149, 1.99);
    if(transactionAmount > 50 && transactionAmount <= 200)
        return Math.max(transactionAmount * 0.0149, 2.99);
    return transactionAmount * 0.0149;
};

module.exports = {
    getCoinbaseQuote,
    getCoinbaseTransactionFee
};
