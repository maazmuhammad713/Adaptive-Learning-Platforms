const studentService = require("../../service/studentService");
const userController = require("./userController");

module.exports = {
  getStudents: async (req, res) => {
    const data = await studentService.getStudents();
    res.send(data);
  },

  createStudent: async (req, res) => {
    const { firstName, lastName, email, phoneNumber, ...Student } = req.body;
    const user = await userController.createUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });
    console.log("asasa");
    console.log(user);
    const student = await studentService.createStudent({
      userID: user.id,
      rollNumber: Student.rollNumber,
      semester: Student.semester,
      department: Student.department,
    });
    console.log(student);
    res.send(student);
    //
  },
};
