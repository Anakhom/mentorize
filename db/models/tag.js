const mongoose = require('mongoose');


const tagSchema = new mongoose.Schema({ 
    tagname: String, 
    mentor_id: Number,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Tag', tagSchema);
