require('dotenv').config();
const { getBinancePrice } = require('./lib/exchanges/binance');
const { getCoinbasePrice } = require('./lib/exchanges/coinbase');
const { getKrakenPrice } = require('./lib/exchanges/kraken');
const { calculateProfitPercentage } = require('./lib/utils/utils');

const comparePrices = async() => {
    const currencyPair = [
        { coinbase: 'ETH-BTC', binance: 'ETHBTC', kraken: 'XETHXXBT' },
        { coinbase: 'LTC-BTC', binance: 'LTCBTC', kraken: 'XLTCXXBT' },
        { coinbase: 'XRP-BTC', binance: 'XRPBTC', kraken: 'XXRPXXBT' },
        { coinbase: 'XLM-BTC', binance: 'XLMBTC', kraken: 'XXLMXXBT' },
        { coinbase: 'ETC-BTC', binance: 'ETCBTC', kraken: 'XETCXXBT' },
        { binance: 'REPBTC', kraken: 'XREPXXBT' },
    ];

    for(let i = 0; i < currencyPair.length; i++) {
        const binancePrice = await getBinancePrice(currencyPair[i].binance);
        const coinbasePrice = await getCoinbasePrice(currencyPair[i].coinbase);
        const krakenPrice = await getKrakenPrice(currencyPair[i].kraken);

        const bcProfitPercent = calculateProfitPercentage(
            coinbasePrice,
            binancePrice,
        );

        const cbProfitPercent = calculateProfitPercentage(
            binancePrice,
            coinbasePrice,
        );
        const kbProfitPercent = calculateProfitPercentage(
            binancePrice,
            krakenPrice,
        );
        const bkProfitPercent = calculateProfitPercentage(
            krakenPrice,
            binancePrice,
        );
        const ckProfitPercent = calculateProfitPercentage(
            krakenPrice,
            coinbasePrice,
        );
        const kcProfitPercent = calculateProfitPercentage(
            coinbasePrice,
            krakenPrice,
        );

        console.log('bc', currencyPair[i].binance, bcProfitPercent);
        console.log('cb', currencyPair[i].binance, cbProfitPercent);
        console.log('kb', currencyPair[i].binance, kbProfitPercent);
        console.log('bk', currencyPair[i].binance, bkProfitPercent);
        console.log('ck', currencyPair[i].binance, ckProfitPercent);
        console.log('kc', currencyPair[i].binance, kcProfitPercent);
    }
};

comparePrices();
