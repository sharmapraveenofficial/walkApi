const express = require('express');
const controller = require('./../controller/getDataController');
const multer=require('multer')

const upload = multer()

const router = express.Router();



router.route('/test').get(upload.none(),controller.getData).post(upload.none(),controller.getData);


module.exports = router;