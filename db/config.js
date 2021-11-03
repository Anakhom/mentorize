const dbUrl = 'mongodb://localhost:27017/mentorize2';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

module.exports = { dbUrl, options };