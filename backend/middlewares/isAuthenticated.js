const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');


const auth = async (req, res, next) => {

    if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {

        return res.status(StatusCodes.UNAUTHORIZED).send({
            success: false,
            message: 'No authorization header found',
            data: null
        });

    };



    const tokenOfTheUser = req.headers.authorization.split(' ')[1];

    try {
        
        const payload = jwt.verify(tokenOfTheUser, process.env.JWT_SECRET);
        
        req.body.idOfTheUser = payload.userId;

        next();

    } catch (error) {

        console.log(error);

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });
        
    }

};


module.exports = auth;

