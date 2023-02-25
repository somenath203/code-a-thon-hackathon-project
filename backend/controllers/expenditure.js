const { StatusCodes } = require('http-status-codes');

const expenditureModel = require('./../models/expenditureModels');


const createExpenditure = async (req, res) => {

    try {

        const createExpenditure = await expenditureModel.create({ expenditureAmount: req.body.expenditureAmount, itemName: req.body.itemOfExpendditure, createdBy: req.body.idOfTheUser })
        
        res.status(StatusCodes.CREATED).send({
            success: true,
            message: 'expenditure created successfully',
            data: createExpenditure
        });
        
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    }

};


const fetchAllExpenditure = async (req, res) => {

    try {
        
        const allExpenditure = await expenditureModel.find({ createdBy: req.body.idOfTheUser });

        res.status(StatusCodes.OK).send({
            success: true,
            message: 'all expenditures fetched successfully',
            data: allExpenditure
        });

    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    }

}


const totalExpenditure = async (req, res) => {

    try {
        
        let totalExpenditureTillNow = 0;

        const allExpenditure = await expenditureModel.find({ createdBy: req.body.idOfTheUser });

        allExpenditure.map((expenditure) => {

            return totalExpenditureTillNow = totalExpenditureTillNow + expenditure.expenditureAmount;

        });

        res.status(StatusCodes.OK).send({
            success: true,
            message: 'total saving amount fetched successfully',
            data: totalExpenditureTillNow
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
    createExpenditure,
    fetchAllExpenditure,
    totalExpenditure
};