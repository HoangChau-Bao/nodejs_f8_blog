const Course = require('../models/Couse');

class SiteController {
  //[GET] /#
  index(req, res) {
    //res.render('home');

    Course.find({}, function (err, courses) {
      if (!err) res.json(courses);
      else res.status(400).json({ error: 'ERROR!!!' });
    });
  }

  search(req, res) {
    res.render('search');
  }

  contact(req, res) {
    res.render('contact');
  }
}

module.exports = new SiteController();
