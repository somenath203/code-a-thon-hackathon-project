require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./utils/connectDB');

const userRouter = require('./routes/userRoutes');
const savingsRouter = require('./routes/savingsRoutes');
const expenditureRouter = require('./routes/expenditureRoutes');
const investmentRouter = require('./routes/investmentRoutes');


const app = express();


app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(userRouter);
app.use(savingsRouter);
app.use(expenditureRouter);
app.use(investmentRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});