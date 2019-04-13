const key = process.env.KRAKEN_API_KEY;
const secret = process.env.KRAKEN_PRIVATE_KEY;
const XBT_SLICE_INDEX = { start: 5, end: 8 };
const TRADE_FEE = {
    makerTradeFee: 0.0016,
    takerTradeFee: 0.0026
};

const KrakenClient = require('kraken-api');
const Kraken = new KrakenClient(key, secret);

const getAllCurrencyPairs = async() => {
    const allAssetPairs = await Kraken.api('AssetPairs');
    const assetPairKeys = Object.keys(allAssetPairs.result);
    const xbtAssetPairKeys = assetPairKeys.filter(currencyPair => {
        return (
            currencyPair.slice(XBT_SLICE_INDEX.start, XBT_SLICE_INDEX.end) ===
                'XBT' && currencyPair.length === XBT_SLICE_INDEX.end
        );
    });
    return xbtAssetPairKeys;
};
const getKrakenQuote = async currencyPair => {
    const price = await Kraken.api('Ticker', { pair: currencyPair });

    if(!price) return;

    const formattedPrice = {
        exchange: 'Kraken',
        symbol: currencyPair,
        bid: price.result[currencyPair].b[0],
        ask: price.result[currencyPair].a[0],
        makerTradeFee: TRADE_FEE.makerTradeFee,
        takerTradeFee: TRADE_FEE.takerTradeFee
    };
    return formattedPrice;
};
module.exports = {
    getKrakenQuote,
    getAllCurrencyPairs
};
