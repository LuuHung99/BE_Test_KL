const Product = require('../../model/product');

module.exports = {
  get_index: () => Product.find().lean(),
  put_index: (product) => Product(product).save(),
  post_index: (product) => Product.findByIdAndUpdate(product._id, product)
};
