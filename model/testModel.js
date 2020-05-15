const mongoose = require('mongoose');

const testSchema=mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number
    },
    gender:{
        type:String,
        emum:['male','female','none'],
        default:'none'
    }
})

const TestSchema =mongoose.model('Test',testSchema);

module.exports=TestSchema;