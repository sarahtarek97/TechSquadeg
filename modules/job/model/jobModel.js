//use mongoose in creating the model
const mongoose = require('mongoose');

//require the schema I created before
const jobSchema = require('../schema/jobSchema');

//create the job model
const Job = mongoose.model('job',jobSchema);

//export the model to job in controller
module.exports = Job;