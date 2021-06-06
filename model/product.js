const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  path: String,
  key: Number,
  parentId: mongoose.Schema.Types.ObjectId,
  content: String
});

module.exports = mongoose.model('Product', productSchema);
