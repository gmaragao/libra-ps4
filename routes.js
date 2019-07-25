const express = require('express');
const router = express.Router();

const PlayerController = require('./Controller/PlayerController');

router.get('/', (req, res) => {
  res.render('home');
});
router.get('/register', (req, res) => {
  res.render('register');
});
router.post('/register', PlayerController.createPlayer);
router.get('/player/:psnAccount', PlayerController.getPlayer);
router.get('/addGame', (req, res) => {
  res.render('game');
});
router.get('/players', PlayerController.getAllPlayers);
// router.post('/player', PlayerController.createPlayer);
router.post('/player', PlayerController.updateGames);

module.exports = router;
