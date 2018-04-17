const User = require('../models/user');

function usersShow(req, res){
  User
    .findById(req.params.id)
    .populate('post')
    .exec()
    .then(user => res.render('users/show', {user}));
}

module.exports = {
  show: usersShow
};
