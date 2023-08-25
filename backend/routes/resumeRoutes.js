const express = require('express');
const router = express.Router();
const { createResume, getOneResume, getResume } = require('../controllers/resumeControllers');

router.route('/createresume')
  .post(createResume);

router.route('/getresume/:id')
  .get(getOneResume);

router.route('/getresume')
  .get(getResume);

module.exports = router;