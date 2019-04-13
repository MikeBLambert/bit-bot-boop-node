const Binance = require('binance-api-node').default;

const authenticatedClient = Binance({
    apiKey: process.env.BINANCE_API_KEY,
    apiSecret: process.env.BINANCE_SECRET_KEY
});

const getBinanceQuote = async currencyPair => {
    const prices = await authenticatedClient.allBookTickers();
    const tradeFees = await authenticatedClient.tradeFee();
    const tradeFee = tradeFees.find(({ symbol }) => {
        return symbol === currencyPair;
    });

    if(!prices) return;

    const formattedQuote = {
        exchange: 'Binance',
        symbol: currencyPair,
        bid: prices[currencyPair].bidPrice,
        ask: prices[currencyPair].askPrice,
        makerTradeFee: tradeFee.maker,
        takerTradeFee: tradeFee.taker
    };
    
    return formattedQuote;
};

module.exports = {
    getBinanceQuote
};
