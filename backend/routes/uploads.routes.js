const express = require('express')
const router = express.Router()

const {upload} = require('../config/uploads.configs')

const UploadsController = require('../controllers/uploads-controller')

router.post('/uploads', upload.single('file'), UploadsController.fileUpload)

module.exports = router
