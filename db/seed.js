const mongoose = require("mongoose");
const User = require("./models/user");
const { dbUrl, options } = require('./config');

(async () => {
  try {
    console.log('Conecting...')
    await mongoose.connect(dbUrl, options);
    console.log('Mongoose connected to remote database successfully');

    await Entry.deleteMany();

    console.log('Seeding...');

    await Tag.insertMany([
      {tagname: "JavaScript"},
      {tagname: "React"},
      {tagname: "Java"},
      {tagname: "Python"},
      {tagname: "PostgreSQL"},
      {tagname: "Node.js"},
      {tagname: "PHP"},
      {tagname: "MongoDB"},
      {tagname: "Oracle"},
      {tagname: "Cassandra"},
      {tagname: "React Native"},
      {tagname: "Go"},
      {tagname: "Ruby"},
      {tagname: "Algorithms"},
      {tagname: "Test-cases"},
      {tagname: "Soft skills"},
      {tagname: "Time management"},
      {tagname: "Crisis management"},
      {tagname: "HR training"},
      {tagname: "Finance modelling"},
      {tagname: "Data analysis"},
      {tagname: "C++"},
      {tagname: "AI & ML"},
      {tagname: "Databases"},
    ]);
  }
  catch (e) {
    console.error('Error:', e.message)
  }
  finally {
    await mongoose.connection.close()
    console.log('DB closed');
  }
})()
