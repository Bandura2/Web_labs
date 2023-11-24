const express = require('express');
const router = express.Router();
const controler = require('./controler');

router.get('/read', controler.read);
router.get('/insect/:insectId', controler.getById);

module.exports = router;