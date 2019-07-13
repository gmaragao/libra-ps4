'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  player1: {
    psnAccount: {
      type: String,
      required: true
    },
    points: {
      type: Number,
      required: true
    },
    team: {
      type: String,
      required: true
    }
  },
  player2: {
    psnAccount: {
      type: String,
      required: true
    },
    points: {
      type: Number,
      required: true
    },
    team: {
      type: String,
      required: true
    }
  },
  played: {
    type: Boolean
  },
  playedDate: {
    type: String
  }
});

module.exports = GameSchema;
