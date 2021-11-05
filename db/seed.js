const mongoose = require("mongoose");
const Mentor = require("./models/mentor");
const Tag = require("./models/tag");
// const { User, Tag } = require("./models");
const { dbUrl, options } = require('./config');

(async () => {
  try {
    console.log('Conecting...')
    await mongoose.connect(dbUrl, options);
    console.log('Mongoose connected to database successfully');

    console.log('Seeding...');
    // ]);

    await Mentor.insertMany([
      {
        login: "denis01",
        email: "denis@denis.ru",
        password: '123123',
        firstName: "Denis",
        lastName: "Obraztsov",
        aboutMe: 'Люблю кодить. Помогу советом.',
        experience: 'Elbrus Bootcamp - полгода',
        stack: [
          '6182396ce8db9c297fa3f667',
          '6182396ce8db9c297fa3f668',
          '6182396ce8db9c297fa3f66b',
          '6181490077384b3d748f948b',
          '6182396ce8db9c297fa3f66c',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: "tapac",
        email: "tapac@tapac.ru",
        password: '123123',
        firstName: "Tapac",
        lastName: "Golomozi",
        aboutMe: 'Люблю вкусно кушать. Помогу советом.',
        experience: 'Elbrus Bootcamp',
        stack: [
          '6182396ce8db9c297fa3f667',
          '6182396ce8db9c297fa3f668',
          '6182396ce8db9c297fa3f66b',
          '6181490077384b3d748f948b',
          '6182396ce8db9c297fa3f66c',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: "roman",
        email: "roman@roman.ru",
        password: '123123',
        firstName: "Roman",
        lastName: "Paramzin",
        aboutMe: 'Во всем виноваты индусы. Помогу советом.',
        experience: 'Elbrus Bootcamp',
        stack: [
          '6182396ce8db9c297fa3f667',
          '6182396ce8db9c297fa3f668',
          '6182396ce8db9c297fa3f66b',
          '6181490077384b3d748f948b',
          '6182396ce8db9c297fa3f66c',
        ],
      },
      await User.insertMany([
        {
          login: "pupkin1",
          email: "pupkin@pi.ru",
          password: '123123',
          firstName: "Бил",
          lastName: "Гейтс",
          aboutMe: 'Обращайтесь',
          experience: 'Microsoft',
          stack: [
            '6181490077384b3d748f9484',
            '6181490077384b3d748f9485',
            '6181490077384b3d748f9489',
            '6181490077384b3d748f948b',
            '6181490077384b3d748f9494',
          ],
        },
      ]),
    }
  catch (e) {
    console.error('Error:', e.message);
  }
  finally {
    await mongoose.connection.close();
    console.log('DB closed');
  }
})();
