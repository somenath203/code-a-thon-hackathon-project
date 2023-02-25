const router = require('express').Router();

const { createExpenditure, totalExpenditure, fetchAllExpenditure } = require('./../controllers/expenditure');
const authMiddleware = require('./../middlewares/isAuthenticated');


router.post('/expenditure', authMiddleware, createExpenditure);
router.post('/all-expenditure', authMiddleware, fetchAllExpenditure);
router.post('/totalExpenditure', authMiddleware, totalExpenditure);


module.exports = router;