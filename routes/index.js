let express = require('express');
let router = express.Router();
const { renderMainPage } = require('../controllers/indexController')

router.get('/', renderMainPage);

module.exports = router;