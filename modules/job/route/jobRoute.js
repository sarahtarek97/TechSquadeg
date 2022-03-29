/****Imports****/
//create a sub app from the express for routes
const router = require('express').Router();

//require all the handel functions for each Api
const { jobEndpoint } = require('../controller/jobCntroller');


/***Api***/
//call the endpoint to intiate the cron job needed
router.post('/jobReq',jobEndpoint);

//export the route to use it in the main file app.js
module.exports = router;