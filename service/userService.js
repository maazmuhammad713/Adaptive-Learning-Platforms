const { models } = require("../models/definations");

module.exports = {
  getUsers: (data) => {
    return data;
  },
  createUsers: async (data) => {
    console.log(data);
    const result = await models.user.create(data);
    return result;
  },
};
