const cron = require('node-cron');
const Job = require('../modules/job/model/jobModel');

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

module.exports = initJob;