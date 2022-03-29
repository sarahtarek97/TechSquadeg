/******import all the packages that will use in this file*****/
//require express and create an app from it to use
const express = require('express');
const app = express();

//require the DB connection
const connection = require('./configration/configDB');

//require the .env to use all the info I hide for security reasons
require('dotenv').config()
const port = process.env.PORT;

//require the route that map on user to use the apis
const jobRoute = require('./modules/job/route/jobRoute');


/***Middlewares***/
//middleware to handle the buffer that retun and make it json
app.use(express.json());

/***DB connection***/
//establish connection with the mongo DB
connection();

/***routes***/
//implement the route
app.use(jobRoute);

/***server***/
//listen to the server to run it
app.listen(port,()=> console.log(`server is running on port ${port}!!`));