const router = require('express').Router();

const { registerController, loginController, getUserProfile } = require('../controllers/userControllers');
const authMiddleware = require('./../middlewares/isAuthenticated');


router.post('/register', registerController);

router.post('/login', loginController);

router.post('/getUserProfile', authMiddleware, getUserProfile);


module.exports = router;