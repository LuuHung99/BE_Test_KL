const Product = require('../../model/frontend');

module.exports = {
  get_index: () => Product.find().lean(),
  put_index: (product) => Product(product).save(),
  post_index: (product) => {
    console.log(product);
    // Product.findByIdAndUpdate(product._id, { $set: product }).then((l) => {
    //   console.log(l);
    // });
    // Frontend.updateOne({ _id: frontend._id }, frontend);
  },
  get_activated: () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Product.find({ activated: true }, 'title description').lean()
};
