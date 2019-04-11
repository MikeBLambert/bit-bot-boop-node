const key = process.env.KRAKEN_API_KEY;
const secret = process.env.KRAKEN_PRIVATE_KEY;
const KrakenClient = require('kraken-api');
const Kraken = new KrakenClient(key, secret);

const getKrakenPrice = async currencyPair => {
    const price = await Kraken.api('Ticker', { pair: currencyPair });

    if(!price) return;

    const formattedPrice = {
        exchange: 'Kraken',
        symbol: currencyPair,
        bid: price.result[currencyPair].b[0],
        ask: price.result[currencyPair].a[0],
    };
    return formattedPrice;
};
module.exports = {
    getKrakenPrice,
};
