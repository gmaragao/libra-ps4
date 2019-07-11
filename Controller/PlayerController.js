const Player = require('../Model/Player');
const Register = require('../Model/Profile');

exports.createPlayer = async (req, res) => {
  const { profile } = req.body;
  //   console.log(name, password);
  //   console.log('com req.body', req.body.name);
  const newPlayer = new Player({
    profile
  });
  console.log(newPlayer);
  await newPlayer
    .save()
    .then(() => {
      res.send(newPlayer);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.updateGames = async (req, res) => {
  const { psnAccount, game } = req.body;
  const player = await Player.findOneAndUpdate(
    { psnAccount },
    {
      $push: { gamePlayed: game }
    },
    { new: true }
  )
    .then(() => res.send(player))
    .catch(err => {
      res.send(err);
    });
};
