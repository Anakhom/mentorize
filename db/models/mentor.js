const { Schema, model } = require('mongoose');

const mentorSchema = new Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true,
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
  experience: {
    type: String,
    required: true,
  },
  stack: {
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

const Mentor = model('Mentor', mentorSchema);
module.exports = Mentor;
