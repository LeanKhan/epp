const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./user-routes/user-routes');
// const formidable = require('formidable');

// Port

// let uri = 'mongodb://<dbuser>:<dbpassword>@ds018308.mlab.com:18308/mydb';
let port = 3000;

// Middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',userRouter);

// MongoDB connection
mongoose.connect('mongodb://admin:open123!@ds018308.mlab.com:18308/mydb');

mongoose.connection.once('open',()=>{
    console.log('Mongooose Database connection successful')
})
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

// Listen for port 3000

app.listen(port, ()=>{
    console.log("Server running on "+port);
})
