const { models } = require("../models/definations");

module.exports = {
  getUsers: async () => {
    const result = await models.user.findAll();
    return result;
  },
  createUsers: async (data) => {
    console.log(data);
    const result = await models.user.create(data);
    return result;
  },
};
