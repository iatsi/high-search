var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    email: {type:String, unique:true},
    environment: {type:String, enum:['prod','staging','dev']},
    component: {type:String},
    message: {type:String},
    data: {},
}, {
    timestamps: true
});


module.exports = mongoose.model('Event', EventSchema);
