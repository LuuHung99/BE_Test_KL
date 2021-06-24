const Tab = require('../../model/tab');

module.exports = {
  get_index: () => Tab.find().lean(),
  put_index: (tab) =>  {
    Tab(tab).save()
    console.log(tab);
  } ,
  post_index: (tab) => {
    Tab.findByIdAndUpdate(tab._id, tab);
  },
  get_activated: () => Tab.find({ activated: true }, 'title description').lean()
};
