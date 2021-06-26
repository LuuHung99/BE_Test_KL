const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  title: String,
  activated: Boolean,
  description: String,
  tabs: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tab' }], //frontend
  backends: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Resource' }],
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', RoleSchema);
