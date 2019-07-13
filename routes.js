const express = require('express');
const router = express.Router();

const PlayerController = require('./Controller/PlayerController');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/player/:psnAccount', PlayerController.getPlayer);
router.post('/player', PlayerController.createPlayer);
router.put('/player', PlayerController.updateGames);

module.exports = router;
