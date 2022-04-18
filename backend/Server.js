const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/api/user',require('./routes/userRoute'));
mongoose.connect(process.env.PORT,()=>{
    console.log('connected to mongoDB');
})

app.listen(port,()=>{
    console.log(`Listening to ${port} port`)
})
