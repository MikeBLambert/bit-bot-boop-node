const Binance = require('binance-api-node').default;

const authenticatedClient = Binance({
    apiKey: process.env.BINANCE_API_KEY,
    apiSecret: process.env.BINANCE_SECRET_KEY,
});

const getBinancePrice = async currencyPair => {
    const prices = await authenticatedClient.allBookTickers();

    if(!prices) return;

    const formattedPrice = {
        exchange: 'Binance',
        symbol: currencyPair,
        bid: prices[currencyPair].bidPrice,
        ask: prices[currencyPair].askPrice,
    };

    return formattedPrice;
};

const binanceTradeFee = 0.001;

module.exports = {
    getBinancePrice,
    binanceTradeFee,
};
