const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Models
const Profile = require('./Profile');
const Game = require('./Game');

const PlayerSchema = new Schema({
  profile: { type: Profile, required: true },
  gamePlayed: [Game]
});

module.exports = mongoose.model('Player', PlayerSchema);
