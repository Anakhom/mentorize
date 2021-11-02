const mongoose = require('mongoose');


const entrySchema = new mongoose.Schema({ 
    singer: String, 
    songTitle: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Entry', entrySchema);
