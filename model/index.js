const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
  itemId: {
    type: Number
  },
  title: {
    type: String,
    default: ''
  },
  deadline: {
    type: String,
    default: ''
  },
  value: {
    type: Boolean,
    default: false
  },
  isStarred: {
    type: Boolean,
    default: false
  }
})


const userSchema = new Schema ({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('users', userSchema);