const mongoose = require('mongoose');

const UserHistorySchema = new mongoose.Schema({
  userId: String,
  type: String,
  reason: String,
  username: String,
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserHistory', UserHistorySchema);
