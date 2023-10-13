var express = require("express");
const {
  createStudent,
  getStudents,
} = require("../controller/user/studentController");

var router = express.Router();

/* GET users listing. */
router.get("/getStudents", getStudents);
router.post("/createStudent", createStudent);

module.exports = router;
