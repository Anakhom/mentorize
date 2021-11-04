const Mentor = require('../db/models/mentor');
it 
exports.renderMentors = async (req, res) => {
  let mentors;
  try {
    mentors = await Mentor.findOne().populate('stack');
    console.log(mentors);
  } catch (error) {
    console.log(error.message);
    // return res.render('error', {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {},

  }

  return res.render('mentors', { mentors });
};
