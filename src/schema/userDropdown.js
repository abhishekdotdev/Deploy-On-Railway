const mongoose = require('mongoose');

const dropDownSchema = new mongoose.Schema({
  name: String,
  value: String,
});

const dropDownItem = mongoose.model('dropDownItem', dropDownSchema);

module.exports = dropDownItem;
