const Player = require('../Model/Player');
let Game = require('../Model/Game');
const mongoose = require('mongoose');
const Register = require('../Model/Profile');
const bcrypt = require('bcrypt');
const saltRounds = 10;
Game = mongoose.model('Game', Game);

exports.createPlayer = async (req, res) => {
  const { email, password, psnAccount, name } = req.body;
  console.log(req.body);
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    const newPlayer = new Player({
      'profile.email': email,
      'profile.name': name,
      'profile.psnAccount': psnAccount,
      'profile.password': hash
    });
    await newPlayer
      .save()
      .then(() => {
        res.redirect(`/player/${newPlayer.profile.psnAccount}`);
      })
      .catch(err => {
        res.send(err);
      });
  });
};

exports.getPlayer = async (req, res) => {
  const psnAccount = req.params.psnAccount;
  console.log(psnAccount);
  const player = await Player.findOne({ 'profile.psnAccount': psnAccount })
    .then(player => {
      console.log(player.gamePlayed);
      res.render('player', { player });
    })
    .catch(err => {
      res.send(err);
    });
};

exports.updateGames = async (req, res) => {
  const {
    player1Psn,
    player1Team,
    player1Points,
    player2Psn,
    player2Team,
    player2Points
  } = req.body;
  console.log(req.body);
  const player1 = {
    psnAccount: player1Psn,
    points: player1Points,
    team: player1Team
  };
  const player2 = {
    psnAccount: player2Psn,
    points: player2Points,
    team: player2Team
  };
  console.log(player1.points, player2);
  const game = await new Game({
    player1,
    player2,
    played: true
  });
  console.log(game);
  let player = await Player.findOneAndUpdate(
    { 'profile.psnAccount': player1Psn },
    {
      $push: { gamePlayed: game }
    },
    { new: true }
  ).catch(err => {
    res.send(err);
  });
  player = await Player.findOneAndUpdate(
    { 'profile.psnAccount': player2Psn },
    {
      $push: { gamePlayed: game }
    },
    { new: true }
  )
    .then(() => res.redirect(`/player/${player1Psn}`))
    .catch(err => {
      res.send(err);
    });
};

exports.getAllPlayers = async (req, res) => {
  console.log('oi');
  const players = await Player.find()
    .then(players => {
      console.log(players);
      res.render('players', { players });
    })
    .catch(err => res.send(err));
};
