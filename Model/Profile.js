const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  psnAccount: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = RegisterSchema;
