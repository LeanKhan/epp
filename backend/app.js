const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Port

let port = 3000;

// Middleware

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection

// Listen for port 3000

app.listen(port, ()=>{
    console.log("Server running on "+port);
})
