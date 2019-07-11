const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  player1: {
    psnAccount: {
      type: String,
      required: true
    },
    points: {
      type: Number
    },
    team: {
      type: String
    }
  },
  player2: {
    psnAccount: {
      type: String,
      required: true
    },
    points: {
      type: Number
    },
    team: {
      type: String
    }
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
