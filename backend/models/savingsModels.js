const mongoose = require('mongoose');


const savingSchema = new mongoose.Schema({
    savings: {
        type: Number,
        default: 0
    }, 
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Savings', savingSchema);