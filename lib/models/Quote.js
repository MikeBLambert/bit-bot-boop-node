const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    exchange: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exchange',
        required: true
    },
    currencies: [{
        pair: {
            type: String,
            required: true
        },
        buyPrice: {
            type: Number,
            required: true
        },
        sellPrice: {
            type: Number,
            required: true
        },
        createdTime: {
            type: Date, 
            default: Date.now()
        }
    }]
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
