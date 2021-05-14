var express = require('express');
var router = express.Router();
const songsCtrl = require('../../controllers/api/songs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/create', ensureLoggedIn, songsCtrl.create);
router.get('/songs', ensureLoggedIn, songsCtrl.index);
router.delete('/:id', ensureLoggedIn, songsCtrl.delete);

module.exports = router;