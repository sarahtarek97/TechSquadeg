//user mongoose in creating the schema
const mongoose = require('mongoose');


//create the schema for the job collection
const jobSchema = new mongoose.Schema({
    date:{type:Date,required:true},
    x:{type:Object,required:[true, 'should enter the object']},
},{
    timestamps:true,
})

//export that schema to use it while creating the model
module.exports = jobSchema;