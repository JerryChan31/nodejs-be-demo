const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
  itemId: {
    type: number
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
    type: boolean,
    default: false
  },
  isStarred: {
    type: boolean,
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
  },
  state: {
    itemCount: {
      type: Number,
      default: 0
    },
    showingListIndex: {
      type: Number,
      default: 0
    },

  }
})

module.exports = mongoose.model('users', userSchema);