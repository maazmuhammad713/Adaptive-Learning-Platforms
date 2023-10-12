const Joi = require("joi");
const courseService = require("../../service/courseService");
//We do validations in controller
//We can use joi package for validation
//We will demonstrate joi validation in this example
//example:

const courseSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
});
module.exports = {
  getCourses: (req, res) => {
    const data = courseService.getCourses(req.body);
    res.send(data);
  },

  updateCourse: (req, res) => {
    const data = courseService.updateCourse(req.body);
    res.send(data);
  },
  deleteCourse: (req, res) => {
    const data = courseService.deleteCourse(req.body);
    res.send(data);
  },
  addCourse: (req, res) => {
    try {
      const validate = courseSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const data = courseService.addCourse(req.body);
      res.send(data);
    } catch {
      res.status(500).send("Something went wrong");
    }
  },
};
