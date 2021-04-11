const Course = require('../models/Couse');

class SiteController {
  //[GET] /#
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) res.json(courses);
    //   else res.status(400).json({ error: 'ERROR!!!' });
    // });

    Course.find({})
      .then((courses) => res.render('home', { courses: courses }))
      .catch(next);
  }

  search(req, res) {
    res.render('search');
  }

  contact(req, res) {
    res.render('contact');
  }
}

module.exports = new SiteController();
