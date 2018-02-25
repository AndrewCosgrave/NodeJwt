// Product.js
var mongoose = require('mongoose');  
var ProductSchema = new mongoose.Schema({  
  id:Number,
  name: String
  
});
mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('Product');

