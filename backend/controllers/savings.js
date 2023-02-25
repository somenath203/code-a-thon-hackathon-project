const { StatusCodes } = require('http-status-codes');

const savingsModel = require('../models/savingsModels');


const savingsController = async (req, res) => {

    try {

        const savings = req.body.saving;

        const savingsCreated = await savingsModel.create({ savings: savings, createdBy: req.body.idOfTheUser });

        res.status(StatusCodes.CREATED).send({
            success: true,
            message: 'your budget has been fetched successfully',
            data: savingsCreated
        });

    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    }

};


const totalSavings = async (req, res) => {

    try {
        
        let totalSavingsTillNow = 0;

        const allSavings = await savingsModel.find({ createdBy: req.body.idOfTheUser });

        allSavings.map((saving) => {

            return totalSavingsTillNow = totalSavingsTillNow + saving.savings;

        });

        res.status(StatusCodes.OK).send({
            success: true,
            message: 'total saving amount fetched successfully',
            data: totalSavingsTillNow
        });
        
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    }
} 


module.exports = {
    totalSavings,
    savingsController
};