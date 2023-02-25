const mongoose = require('mongoose');


const investmentSchema = new mongoose.Schema({
    investmentAmount: {
        type: Number
    },
    companyOnWhichInvested: {
        type: String
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Investment', investmentSchema);