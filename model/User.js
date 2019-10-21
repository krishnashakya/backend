const mongoose= require('mongoose');

const userSchema = mongoose.Schema({
    nameoftheDog: {
        type: String,
        required: true
        
    },
    age : {
        type: String,
        required: true
       
    },
    location : {
        type: String,
        required: true
        
    },
    description : {
        type: String,
        required: true
        
    },
    imageUrl : {
        type: String,
        required: true
    }
    

});

module.exports = mongoose.model('User', userSchema);