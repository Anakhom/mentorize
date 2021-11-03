const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Mentor = model('User', userSchema);
module.exports = Mentor;
