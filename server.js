/*
Author: Nishant Kumar
Description: This file is used to handle the server and the data of MongoDB using mongoose. To resolve cors policy, cors package
             is being used.
Note: To run this project, type "npm run both" on the terminal.              
*/

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors")
var app = express();
var port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/login_cr', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

var Users = require('./routes/Users');

app.use('/users', Users);

app.listen(port, console.log(`Server is starting at ${port}`));