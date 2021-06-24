const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  activated: Boolean,
  author: String,
  parentId: String,
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tab', ProductSchema);
