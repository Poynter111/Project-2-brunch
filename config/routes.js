const router = require('express').Router();
// const albums = require('../controllers/albums');

router.get('/', (req,res) => res.render('home'));
router.get('/blog', (req,res) => res.render('blog'));
router.get('/map', (req,res) => res.render('map'));

module.exports = router;
