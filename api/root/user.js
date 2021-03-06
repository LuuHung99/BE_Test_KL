const crypto = require('crypto');
const User = require('../../model/user');
const UserHistory = require('../../model/userHistory');

module.exports = {
  u_get_index: function () {
    return User.find({}, '-hashedPass -salt')
      .populate({
        path: 'roles',
        match: { activated: true },
        select: 'title description'
      })
      .lean();
  },
  u_put_index: function (user, reason, username) {
    var salt = crypto.randomBytes(128).toString('base64');
    var hashedPassword = crypto
      .createHmac('sha256', salt)
      .update(user.hashedPass)
      .digest('hex');
    user.salt = salt;
    user.hashedPass = hashedPassword;

    return User(user)
      .save()
      .then((u) => {
        user._id = u._id;
        user.createdOn = u.createdOn;
        user.activated = u.activated;
        console.log(user);
        return UserHistory({
          roleId: u._id,
          type: 'Created',
          reason: reason,
          username: username
        }).save();
      })
      .then((log) => {
        return user;
      });
      
  },
  u_post_activate: function (userId, reason, activated, username) {
    return User.findById(userId)
      .then((user) => {
        user.activated = activated;
        return user.save();
      })
      .then((r) => {
        return UserHistory({
          userId: r._id,
          type: activated ? 'activate' : 'disable',
          reason: reason,
          username: username
        }).save();
      });
  },
  u_post_assignRole: function (user, reason, username) {
    return User.findByIdAndUpdate(user._id, user)
      .then((data) => {
        return UserHistory({
          userId: user._id,
          type: 'Update Roles',
          reason: reason,
          username: username
        }).save();
      })
      .then((log) => {
        return log.userId;
      });
  }
};
