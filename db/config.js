const dbUrl = 'mongodb://localhost:27017/mentorize';
const options = {
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true
};

module.exports = { dbUrl, options };