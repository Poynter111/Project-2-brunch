const Post = require('../models/post');

function postsIndex(req, res){
  Post
    .find()
    .populate('user')
    .exec()
    .then(posts => {
      res.render('posts/index', {posts});
    });
}

function postsShow(req, res){
  Post
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(post => res.render('posts/show', {post}));
}

function postsNew(req, res){
  res.render('posts/new', {error: null});
}

function postsCreate(req, res){
  req.body.user = req.currentUser;
  req.body.date = new Date(req.body.date);

  Post
    .create(req.body)
    .then(() => res.redirect('/posts'))
    .catch((error) => {
      if(error.name === 'ValidationError'){
        return res.badRequest('/posts/new', error.toString());
      }
    });
}

function postsEdit(req, res){
  Post
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(post => res.render('posts/edit', {post}));
}

function postsUpdate(req, res){
  Post
    .findById(req.params.id)
    .exec()
    .then(post => {
      post = Object.assign(post, req.body);
      return post.save();
    })
    .then(post => {
      res.redirect(`/posts/${post.id}`);
    });
}

function postsDelete(req, res){
  Post
    .findById(req.params.id)
    .exec()
    .then(post => post.remove())
    .then(() => res.redirect('/posts'));
}
module.exports = {
  index: postsIndex,
  show: postsShow,
  delete: postsDelete,
  new: postsNew,
  create: postsCreate,
  edit: postsEdit,
  update: postsUpdate
};
