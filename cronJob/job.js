/*** Imports ***/
//require the node-cron to build the schedule job needed
const cron = require('node-cron');
//require the Job module to save data on the mongodb
const Job = require('../modules/job/model/jobModel');

//create the cron job schedule function and save the data need on DataBase
const initJob = ()=>{
    cron.schedule('*/2 * * * * *',async()=>{
        let today = new Date(); 
        let obj ={
            "y": "z"
          }
        let newJob = new Job({date: today,x:obj});
        await newJob.save();
    });
}

//exports the function to use it on the POST request handler to intiate
module.exports = initJob;