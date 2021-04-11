const Course = require('../models/Couse');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    formData.slug = req.body.name;
    const course = new Course(formData);

    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {});
  }
}
module.exports = new CourseController();
