const express = require('express');
const router = express.Router();
const { renderMainPage } = require('../controllers/indexController')

router.get('/', renderMainPage);

module.exports = router;