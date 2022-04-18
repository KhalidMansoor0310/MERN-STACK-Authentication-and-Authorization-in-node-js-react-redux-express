const express = require('express');
const app = express();
const port = 5000
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/api/user',require('./routes/userRoute'));
mongoose.connect('mongodb+srv://khalidmansoor:Mansoor00@cluster0.yetfe.mongodb.net/article_DB?retryWrites=true&w=majority',()=>{
    console.log('connected to mongoDB');
})

app.listen(port,()=>{
    console.log(`Listening to ${port} port`)
})