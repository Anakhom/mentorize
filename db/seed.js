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

    await Mentor.insertMany([
      {
        login: 'gates',
        email: 'bill@gates.com',
        password: '123123',
        firstName: 'Билл',
        lastName: 'Гейтс',
        aboutMe: 'Нетерпеливый оптимист от первого лица',
        experience: '30 лет',
        stack: [
          '6184e0e71aa7f2928cce18d0',
          '6184e0e71aa7f2928cce18d2',
          '6184e0e71aa7f2928cce18cf',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'durov',
        email: 'pavel@durov.com',
        password: '123123',
        firstName: 'Павел',
        lastName: 'Дуров',
        aboutMe: 'Социальные сети переоценены',
        experience: '15 лет',
        stack: [
          '6184e0e71aa7f2928cce18d0',
          '6184e0e71aa7f2928cce18ce',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'zukerberg',
        email: 'mark@zukerberg.com',
        password: '123123',
        firstName: 'Марк',
        lastName: 'Цукерберг',
        aboutMe: 'Социальные сети недооценены',
        experience: '17 лет',
        stack: [
          '6184e0e71aa7f2928cce18cc',
          '6184e0e71aa7f2928cce18cd',
          '6184e0e71aa7f2928cce18ce',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'musk',
        email: 'elon@musk.com',
        password: '123123',
        firstName: 'Илон',
        lastName: 'Маск',
        aboutMe: 'Бесконечность - не предел',
        experience: '17 лет',
        stack: [
          '6184e0e71aa7f2928cce18c7',
          '6184e0e71aa7f2928cce18c3',
          '6184e0e71aa7f2928cce18c2',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'cook',
        email: 'tim@cook.com',
        password: '123123',
        firstName: 'Тим',
        lastName: 'Кук',
        aboutMe: 'Самое главное - развивать успех',
        experience: '20 лет',
        stack: [
          '6184e0e71aa7f2928cce18d0',
          '6184e0e71aa7f2928cce18d2',
          '6184e0e71aa7f2928cce18cf',
          '6184e0e71aa7f2928cce18ce',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'rubin',
        email: 'andy@rubin.com',
        password: '123123',
        firstName: 'Энди',
        lastName: 'Рубин',
        aboutMe: 'Рынок без конкуренции - не рынок',
        experience: '20 лет',
        stack: [
          '6184e0e71aa7f2928cce18c4',
          '6184e0e71aa7f2928cce18c6',
          '6184e0e71aa7f2928cce18c8',
          '6184e0e71aa7f2928cce18ca',
          '6184e0e71aa7f2928cce18c1',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'linus',
        email: 'linus@torvalds.com',
        password: '123123',
        firstName: 'Линус',
        lastName: 'Торвальдс',
        aboutMe: 'Помогать миллионам - мое призвание',
        experience: '20 лет',
        stack: [
          '6184e0e71aa7f2928cce18bf',
          '6184e0e71aa7f2928cce18c0',
          '6184e0e71aa7f2928cce18c1',
          '6184e0e71aa7f2928cce18c2',
        ],
      },
    ]);await Mentor.insertMany([
      {
        login: 'gates',
        email: 'bill@gates.com',
        password: '123123',
        firstName: 'Билл',
        lastName: 'Гейтс',
        aboutMe: 'Нетерпеливый оптимист от первого лица',
        experience: '30 лет',
        stack: [
          '6184e0e71aa7f2928cce18d0',
          '6184e0e71aa7f2928cce18d2',
          '6184e0e71aa7f2928cce18cf',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'durov',
        email: 'pavel@durov.com',
        password: '123123',
        firstName: 'Павел',
        lastName: 'Дуров',
        aboutMe: 'Социальные сети переоценены',
        experience: '15 лет',
        stack: [
          '6184e0e71aa7f2928cce18d0',
          '6184e0e71aa7f2928cce18ce',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'zukerberg',
        email: 'mark@zukerberg.com',
        password: '123123',
        firstName: 'Марк',
        lastName: 'Цукерберг',
        aboutMe: 'Социальные сети недооценены',
        experience: '17 лет',
        stack: [
          '6184e0e71aa7f2928cce18cc',
          '6184e0e71aa7f2928cce18cd',
          '6184e0e71aa7f2928cce18ce',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'musk',
        email: 'elon@musk.com',
        password: '123123',
        firstName: 'Илон',
        lastName: 'Маск',
        aboutMe: 'Бесконечность - не предел',
        experience: '17 лет',
        stack: [
          '6184e0e71aa7f2928cce18c7',
          '6184e0e71aa7f2928cce18c3',
          '6184e0e71aa7f2928cce18c2',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'cook',
        email: 'tim@cook.com',
        password: '123123',
        firstName: 'Тим',
        lastName: 'Кук',
        aboutMe: 'Самое главное - развивать успех',
        experience: '20 лет',
        stack: [
          '6184e0e71aa7f2928cce18d0',
          '6184e0e71aa7f2928cce18d2',
          '6184e0e71aa7f2928cce18cf',
          '6184e0e71aa7f2928cce18ce',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'rubin',
        email: 'andy@rubin.com',
        password: '123123',
        firstName: 'Энди',
        lastName: 'Рубин',
        aboutMe: 'Рынок без конкуренции - не рынок',
        experience: '20 лет',
        stack: [
          '6184e0e71aa7f2928cce18c4',
          '6184e0e71aa7f2928cce18c6',
          '6184e0e71aa7f2928cce18c8',
          '6184e0e71aa7f2928cce18ca',
          '6184e0e71aa7f2928cce18c1',
        ],
      },
    ]);
    await Mentor.insertMany([
      {
        login: 'linus',
        email: 'linus@torvalds.com',
        password: '123123',
        firstName: 'Линус',
        lastName: 'Торвальдс',
        aboutMe: 'Помогать миллионам - мое призвание',
        experience: '20 лет',
        stack: [
          '6184e0e71aa7f2928cce18bf',
          '6184e0e71aa7f2928cce18c0',
          '6184e0e71aa7f2928cce18c1',
          '6184e0e71aa7f2928cce18c2',
        ],
      },
    ]);

    // await Mentor.insertMany([
    //   {
    //     login: "denis01",
    //     email: "denis@denis.ru",
    //     password: '123123',
    //     firstName: "Denis",
    //     lastName: "Obraztsov",
    //     aboutMe: 'Люблю кодить. Помогу советом.',
    //     experience: 'Elbrus Bootcamp - полгода',
    //     stack: [
    //       '6182396ce8db9c297fa3f667',
    //       '6182396ce8db9c297fa3f668',
    //       '6182396ce8db9c297fa3f66b',
    //       '6181490077384b3d748f948b',
    //       '6182396ce8db9c297fa3f66c',
    //     ],
    //   },
    // ]);
    // await Mentor.insertMany([
    //   {
    //     login: "tapac",
    //     email: "tapac@tapac.ru",
    //     password: '123123',
    //     firstName: "Tapac",
    //     lastName: "Golomozi",
    //     aboutMe: 'Люблю вкусно кушать. Помогу советом.',
    //     experience: 'Elbrus Bootcamp',
    //     stack: [
    //       '6182396ce8db9c297fa3f667',
    //       '6182396ce8db9c297fa3f668',
    //       '6182396ce8db9c297fa3f66b',
    //       '6181490077384b3d748f948b',
    //       '6182396ce8db9c297fa3f66c',
    //     ],
    //   },
    // ]);
    // await Mentor.insertMany([
    //   {
    //     login: "roman",
    //     email: "roman@roman.ru",
    //     password: '123123',
    //     firstName: "Roman",
    //     lastName: "Paramzin",
    //     aboutMe: 'Во всем виноваты индусы. Помогу советом.',
    //     experience: 'Elbrus Bootcamp',
    //     stack: [
    //       '6182396ce8db9c297fa3f667',
    //       '6182396ce8db9c297fa3f668',
    //       '6182396ce8db9c297fa3f66b',
    //       '6181490077384b3d748f948b',
    //       '6182396ce8db9c297fa3f66c',
    //     ],
    //   },
    // await User.insertMany([
    //   { login: "pupkin1", 
    //   email: "pupkin@pi.ru", 
    //   password: '123123', 
    //   firstName: "Бил", 
    //   lastName: "Гейтс", 
    //   aboutMe: 'Обращайтесь', 
    //   experience: 'Microsoft',
    //   stack: [
    //     '6181490077384b3d748f9484', 
    //     '6181490077384b3d748f9485',
    //     '6181490077384b3d748f9489',
    //     '6181490077384b3d748f948b',
    //     '6181490077384b3d748f9494',
    //   ],  
    // },
    // ]);
  }
  catch (e) {
    console.error('Error:', e.message);
  }
  finally {
    await mongoose.connection.close();
    console.log('DB closed');
  }
})();
