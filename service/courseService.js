const Courses = [
  { id: 1, name: "english" },
  { id: 2, name: "urdu" },
  { id: 3, name: "math" },
];

module.exports = {
  getCourses: (data) => {
    return Courses;
  },

  updateCourse: (data) => {
    const course = Courses.find((c) => c.id === parseInt(data.id));
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      course.name = data.name;
      return course;
    }
  },
  deleteCourse: (data) => {
    const course = Courses.find((c) => c.id === parseInt(data.id));
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      const index = Courses.indexOf(course);
      Courses.splice(index, 1);
      return course;
    }
  },
  addCourse: (data) => {
    const course = {
      id: Courses.length + 1,
      name: data.name,
    };
    Courses.push(course);
    return course;
  },
};
