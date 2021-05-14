const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema ({
  song : Array,
  user : {type : Schema.Types.ObjectId, ref : 'User'}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Song', songSchema);