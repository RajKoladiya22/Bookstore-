const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    price : {
        type : String,
        required : true 
    },
    page : {
        type : String,
        required : true 
    },
    author : {
        type : String,
        required : true 
    },
    image : {
        type : String,
        required : true
    }
});
const user = mongoose.model('user',userSchema);
module.exports = user;
