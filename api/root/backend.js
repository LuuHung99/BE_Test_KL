const Backend = require('../../model/resource');

module.exports = {
  u_get_index: () => Backend.find().lean(),
  u_put_index: (backend) => {
    Backend(backend).save();
  },
  u_post_index: (backend) => {
    return Backend.findByIdAndUpdate(backend._id, backend);
  },
  u_get_activated: () =>
    Backend.find({ activated: true }, 'title description').lean(),
  u_get_account: () => {return "Hello"}
};
