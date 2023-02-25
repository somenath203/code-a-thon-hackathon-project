const router = require('express').Router();

const { totalInvestments, createInvestment, fetchAllInvestments } = require('../controllers/investment');
const authMiddleware = require('./../middlewares/isAuthenticated');


router.post('/investment', authMiddleware, createInvestment);
router.post('/allInvestments', authMiddleware, fetchAllInvestments);
router.post('/totalInvestment', authMiddleware, totalInvestments);


module.exports = router;