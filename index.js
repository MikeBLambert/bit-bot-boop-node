require('dotenv').config();
const { getBinanceQuote } = require('./lib/exchanges/binance');
const { getCoinbaseQuote } = require('./lib/exchanges/coinbase');
const {
    getKrakenQuote,
    getAllCurrencyPairs
} = require('./lib/exchanges/kraken');
const { calculateProfitPercentage } = require('./lib/utils/utils');

const compareQuotes = async() => {
    const allCurrencyPairs = await getAllCurrencyPairs();
    const formattedCurrencyPairs = allCurrencyPairs.map(currency => {
        
        return { coinbase: currency, binance: currency, kraken: currency };
    });
    console.log(formattedCurrencyPairs);

    // for(let i = 0; i < allCurrencyPairs.length; i++) {
    //     const binanceQuote = await getBinanceQuote(currencyPair[i].binance);
    //     const coinbaseQuote = await getCoinbaseQuote(currencyPair[i].coinbase);
    //     const krakenQuote = await getKrakenQuote(currencyPair[i].kraken);

    // const bcProfitPercent = calculateProfitPercentage(
    //     coinbaseQuote,
    //     binanceQuote
    // );

    // const cbProfitPercent = calculateProfitPercentage(
    //     binanceQuote,
    //     coinbaseQuote
    // );
    // const kbProfitPercent = calculateProfitPercentage(
    //     binanceQuote,
    //     krakenQuote
    // );
    // const bkProfitPercent = calculateProfitPercentage(
    //     krakenQuote,
    //     binanceQuote
    // );
    // const ckProfitPercent = calculateProfitPercentage(
    //     krakenQuote,
    //     coinbaseQuote
    // );
    // const kcProfitPercent = calculateProfitPercentage(
    //     coinbaseQuote,
    //     krakenQuote
    // );

    // {
    //     bcProfitPercent &&
    //         console.log('bc', currencyPair[i].binance, bcProfitPercent);
    // }
    // {
    //     cbProfitPercent &&
    //         console.log('cb', currencyPair[i].binance, cbProfitPercent);
    // }
    // {
    //     kbProfitPercent &&
    //         console.log('kb', currencyPair[i].binance, kbProfitPercent);
    // }
    // {
    //     bkProfitPercent &&
    //         console.log('bk', currencyPair[i].binance, bkProfitPercent);
    // }
    // {
    //     ckProfitPercent &&
    //         console.log('ck', currencyPair[i].binance, ckProfitPercent);
    // }
    // {
    //     kcProfitPercent &&
    //         console.log('kc', currencyPair[i].binance, kcProfitPercent);
    // }
    // }
};

compareQuotes();
