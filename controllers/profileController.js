const Mentor = require('../db/models/mentor');
const User = require('../db/models/user');

exports.renderProfile = async (req, res) => {
  let id = req.params.id;

  const user = await User.findById(id).exec();
  const mentor = await Mentor.findById(id).exec();

  if (user) {
    res.render('profile/profile', { User: true, id, user });
  }

  if (mentor) {
    res.render('profile/profile', { id, mentor });
  }
};

exports.renderEditProfile = async (req, res) => {
  let id = req.params.id;

  const user = await User.findById(id).exec();
  const mentor = await Mentor.findById(id).exec();

  if (user) {
    res.render('profile/editProfile', { User: true, id, user });
  }

  if (mentor) {
    res.render('profile/editProfile', { id, mentor });
  }
};

exports.editProfile = async (req, res) => {
  let id = req.params.id;

  try {
    const user = await User.findById(id).exec();
    const mentor = await Mentor.findById(id).exec();

    console.log('your didddd=>>>>', id);
    if (user) {
      await User.findByIdAndUpdate(id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        aboutMe: req.body.aboutMe,
      });
      res.status(200).end();
    }

    if (mentor) {
      await Mentor.findByIdAndUpdate(id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        aboutMe: req.body.aboutMe,
      });
      res.status(200).end();
    }
  } catch (err) {
    console.log(err);
  }
};
