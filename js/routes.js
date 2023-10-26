const express = require('express');
const router = express.Router();
const server = require('./server');

router.post('/create', server.create);
router.get('/getall', server.getall);
router.put('/update', server.update);
router.delete('/delete', server.delete);

module.exports = router;