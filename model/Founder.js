const mongoose= require('mongoose');

const founderSchema = mongoose.Schema({
     founderName: {
        type: String,
        required: true
        
    },
     foundLocation: {
        type: String,
        required: true
       
    },
    founderContact : {
        type: String,
        required: true
        
    },
     founderEmail: {
        type: String,
        required: true
        
    },
    urlImage:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Founder', founderSchema);