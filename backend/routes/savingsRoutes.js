const router = require('express').Router();

const { savingsController, totalSavings } = require('../controllers/savings');
const authMiddleware = require('./../middlewares/isAuthenticated');


router.post('/savings', authMiddleware, savingsController);

router.post('/totalSavings', authMiddleware, totalSavings);


module.exports = router;