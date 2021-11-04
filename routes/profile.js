const express = require('express');
const router = express.Router();
const { renderProfile, renderEditProfile, editProfile } = require("../controllers/profileController");

router
  .route('/:id')
  .get(renderProfile);

router
  .route('/:id/edit')
  .get(renderEditProfile)
  .put(editProfile);

module.exports = router;