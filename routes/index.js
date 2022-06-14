var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home page', name: 'ChienChuot' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about page', name: 'ChienChuot' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact page', name: 'ChienChuot' });
});

module.exports = router;
