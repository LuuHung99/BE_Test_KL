const Sidebar = require('../../model/sidebar');

module.exports = {
  u_get_index: () => Sidebar.find().lean(),
  // put_index: (sidebar) => {
  //   Sidebar(sidebar).save()
  // } ,
  // post_index: (sidebar) => {
  //   Sidebar.findByIdAndUpdate(sidebar._id, sidebar);
  // },
  // get_activated: () => Sidebar.find({ activated: true,  }, 'title description').lean()
};
