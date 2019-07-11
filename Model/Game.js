const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  player1PsnAccount: {
    type: String,
    required: true
  },
  player2PsnAccount: {
    type: String,
    required: true
  },
  played: {
    type: Boolean,
    default: false
  },
  playedDate: {
    type: String
  }
});

module.exports = GameSchema;
