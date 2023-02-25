const { StatusCodes } = require('http-status-codes');

const Investment = require('./../models/investmentModel');


const createInvestment = async (req, res) => {

    try {

        const investmentCreated = await Investment.create({ investmentAmount: req.body.investmentAmount, companyOnWhichInvested: req.body.companyOnWhichInvested, createdBy: req.body.idOfTheUser });

        res.status(StatusCodes.CREATED).send({
            success: true,
            message: 'investment added successfully',
            data: investmentCreated
        });
        
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    }

};

const fetchAllInvestments = async (req, res) => {

    try {
        
        const allInvestments = await Investment.find({ createdBy: req.body.idOfTheUser });

        res.status(StatusCodes.OK).send({
            success: true,
            message: 'all investments fetched successfully',
            data: allInvestments
        });

    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    }

}

const totalInvestments = async (req, res) => {

    try {
        
        let totalInvestmentsTillNow = 0;

        const allInvestments = await Investment.find({ createdBy: req.body.idOfTheUser })

        allInvestments.map((investment) => {

            return totalInvestmentsTillNow = totalInvestmentsTillNow + investment.investmentAmount;

        });

        res.status(StatusCodes.OK).send({
            success: true,
            message: 'total investment amount fetched successfully',
            data: totalInvestmentsTillNow
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
    createInvestment,
    fetchAllInvestments,
    totalInvestments
};
