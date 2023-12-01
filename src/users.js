const uuid = require("uuid");

const users = {
  users: [
    {
      userId: "1",
      name: "victor zubiaga",
      role: "admin",
      addDate: new Date().toISOString(),
    },
    {
      userId: "2",
      name: "Juan Perez",
      role: "user",
      addDate: new Date().toISOString(),
    },
  ],

  getUsers: function () {
    return this.users;
  },

  getUserById: function (userId) {
    const result = this.users.filter((user) => user.userId === userId);
    return result;
  },

  addUser: function (user) {
    if (user.userId === undefined) {
      let userId = uuid.v4();
      user.userId = userId;
    }
    user = { ...user, addDate: new Date().toISOString() };
    this.users.push(user);
    return user;
  },

  deleteUserById: function (userId) {
    let initialLength = this.users.length;
    this.users = this.users.filter((user) => user.userId !== userId);
    return initialLength > this.users.length;
  },

  deleteAll: function () {
    this.users = [];
    return true;
  },
};

module.exports = users;
