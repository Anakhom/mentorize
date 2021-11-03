exports.renderMainPage = async (req, res) => {
  res.render('index', { id: req.session?.user?.id });
}