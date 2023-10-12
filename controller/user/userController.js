const userService = require("../../service/userService");

module.exports = {
  getUser: (req, res) => {
    const data = userService.getUsers("get all users");
    res.send(data);
  },
  createUser: (req, res) => {
    const data = userService.createUsers(req.body);
    console.log(data);
    res.send(data);
  },
};
