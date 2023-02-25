const { StatusCodes } = require('http-status-codes');

const User = require('./../models/userModel');


const registerController = async (req, res) => {

    try {
        
        const isEmailAlreadyExists = await User.findOne({ email: req.body.email });

        if(isEmailAlreadyExists) {

            return res.status(StatusCodes.BAD_REQUEST).send({
                success: false,
                message: 'user with this emailID already exists',
                data: null
            });

        };

        const createUser = await User.create(req.body);

        res.status(StatusCodes.CREATED).send({
            success: true,
            message: 'You have created your account successfully. Now please login.',
            data: {
                fullname: createUser.fullname,
                email: createUser.email
            }
        });
        
        
    } catch (error) {

        console.log(error);
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    };

};


const loginController = async (req, res) => {

    try {
        
        const user = await User.findOne({ email: req.body.email });

        if(!user) {

            return res.status(StatusCodes.BAD_REQUEST).send({
                success: false,
                message: 'Invalid Credentials. Please try again',
                data: null
            });

        };

        const isPasswordCorrect = await user.comparePassword(req.body.password);

        if(!isPasswordCorrect) {

            return res.status(StatusCodes.BAD_REQUEST).send({
                success: false,
                message: 'Invalid Credentials. Please try again',
                data: null
            });

        }


        const token = user.generateToken();


        res.status(StatusCodes.CREATED).send({
            success: true,
            message: 'You have successfully logged in.',
            data: {
                fullname: user.fullname,
                email: user.fullname,
                token: token
            }
        });
        

    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    };

};


const getUserProfile = async (req, res) => {

    try {

        const user = await User.findById(req.body.idOfTheUser);

        res.status(StatusCodes.OK).send({
            success: true,
            message: `details of ${user.fullname} fetched successfully`,
            data: {
                userId: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
        
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: error.message,
            data: null
        });

    };

} 

module.exports = {
    registerController,
    loginController,
    getUserProfile
}