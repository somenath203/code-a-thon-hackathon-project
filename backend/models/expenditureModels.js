const mongoose = require('mongoose');


const expenditureSchema = new mongoose.Schema({
    expenditureAmount: {
        type: Number,
        default: 0
    }, 
    itemName: {
        type: String
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Expenditure', expenditureSchema);