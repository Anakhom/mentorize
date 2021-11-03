const express = require('express');
const router = express.Router();
const { renderProfile, editProfile } = require("../controllers/profileController");

router
  .route('/:id')
  .get(renderProfile);

router
  .route('/:id/edit')
  .put(editProfile);

module.exports = router;