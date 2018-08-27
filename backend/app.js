const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./user-routes/user-routes');
const formidable = require('formidable');

// Port

let port = 3000;

// Middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',userRouter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase');

mongoose.connection.once('open',()=>{
    console.log('Mongooose Database connection successful')
})


// Listen for port 3000

app.listen(port, ()=>{
    console.log("Server running on "+port);
})
