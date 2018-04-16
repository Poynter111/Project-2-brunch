const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/index');
}

function createRoute(req, res){
  User
    .create(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err)=> {
      if(err.name === 'ValidationError'){
        req.flash('danger','You must be logged in');
        return res.status(400).render('registrations/index');
      }
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
