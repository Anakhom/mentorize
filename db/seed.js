// const mongoose = require("mongoose");
// const User = require("./models/user");
// const { dbUrl, options } = require('./config');

// (async () => {
//   try {
//     console.log('Conecting...')
//     await mongoose.connect(dbUrl, options);
//     console.log('Mongoose connected to remote database successfully');

//     await Entry.deleteMany();

//     console.log('Seeding...');
//     await Entry.insertMany([
//       {singer: "Илона Гольман", songTitle: "Nat King Cole - LOVE"},
//       {singer: "Александр Степанченко", songTitle: "Лев Лещенко - Прощай"},
//       {singer: "Гоша Бабаян", songTitle: "Frank Sinatra - My Way"},
//       {singer: "Дмитрий Уткин", songTitle: "Филипп Киркоров - Цвет настроения синий"},
//       {singer: "Евгений Маслович", songTitle: "Jamiroquai - Space Cowboy"},
//       {singer: "Игорь Никифоров", songTitle: "Слот - Платно"},
//       {singer: "Даниил Капустин", songTitle: "Heart Of A Coward - Miscreation"},
//     ]);
//   }
//   catch (e) {
//     console.error('Error:', e.message)
//   }
//   finally {
//     await mongoose.connection.close()
//     console.log('DB closed');
//   }
// })()
