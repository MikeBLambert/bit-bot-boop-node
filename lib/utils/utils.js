const calculateProfitPercentage = (coin1, coin2) => {
    if(coin1 && coin2) return ((coin2.bid - coin1.ask) / coin1.ask) * 100;
    return;
};

module.exports = {
    calculateProfitPercentage,
};
