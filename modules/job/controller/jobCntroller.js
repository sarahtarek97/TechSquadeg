/****Imports****/

//require the Status code to use based on the res
const {StatusCodes} = require('http-status-codes');
const initJob = require('../../../cronJob/job');


/***request handler***/
const jobEndpoint = (req,res)=>{
    try {
        initJob()
        res.json({message:'response sent'})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'error while intiating the cron job',error});
    }
 
}

//export all these request handlers to use it routes file ti handle the api
module.exports = {
    jobEndpoint
}