const User = require('../models/user');
const Post = require('../models/post');

function usersShow(req, res){
  User
    .findById(req.params.id)
    .exec()
    .then(usershow => {
      Post
        .find({ user: usershow._id })
        .exec()
        .then(posts => {
          res.render('users/show', {usershow, posts });
        });
    });
}

module.exports = {
  show: usersShow
};
