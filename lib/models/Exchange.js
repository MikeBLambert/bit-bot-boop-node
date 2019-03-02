const mongoose = require('mongoose');

const exchangeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    fees:{
        txCost: {
            type: Number,
            required: true
        },
        transferCost: {
            type: Number,
            required: true
        }
    }
});
const Exchange = mongoose.model('Exchange', exchangeSchema);
module.exports = Exchange;
