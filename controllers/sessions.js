const User = require('../models/user');

function newRoute(req, res) {
  res.render('sessions/index');
}

function createRoute(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)){
        req.flash('danger','Wrong credentials');
        return res.status(401).render('sessions/index');
      }
      // successfull login
      req.session.userId = user.id;
      res.redirect('/');
    });
}

function deleteRoute(req, res){
  return req.session.regenerate(()=> {
    res.redirect('/');
  });
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
