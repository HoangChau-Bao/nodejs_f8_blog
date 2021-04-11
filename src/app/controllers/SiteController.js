const Course = require('../models/Couse');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  //[GET] /#
  index(req, res, next) {
    Course.find({}) //promise
      .then((courses) => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses),
        });
      })
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
