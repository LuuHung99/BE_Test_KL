const FuncLog = require('../../model/funcLog');
const RoleHistory = require('../../model/roleHistory');
const Frontend = require('../../model/tab');
const Backend = require('../../model/resource');

module.exports = {
  u_get_index: () => FuncLog.find().lean(),
  u_put_index: (log) => {
    FuncLog(log)
      .save()
      .then((l) => {
        if (log.funcType === 'frontend') {
          return Frontend.findById(l.funcId);
        } else {
          return Backend.findById(l.funcId);
        }
      })
      .then((f) => {
        f.activated = log.activated;
        return f.save();
      });
      console.log(log);
  },
  u_get_roleHistory: () => RoleHistory.find().lean()
};
