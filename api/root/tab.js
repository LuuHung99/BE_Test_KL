const Tab = require('../../model/tab');

module.exports = {
   o_get_index: () => Tab.find().lean(),
  u_put_index: (tab) =>  {
    Tab(tab).save()
  }, 
  u_post_index: (tab) => {
    return Tab.findByIdAndUpdate(tab._id, tab);
  },
  u_get_activated: () => Tab.find({ activated: true,  }, 'title description').lean(),
  u_get_tong: function tinhTong(a,b) {
    return {tong: a+b}
  }
};
