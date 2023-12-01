const userRepository = require("../src/users");
const userToBeAdded = { name: "Juan Perez", role: "user" };
let userAdded;

describe("users test", () => {
  test("addUsers", () => {
    userAdded = userRepository.addUser(userToBeAdded);
    for (let key in userToBeAdded) {
      expect(userAdded).toHaveProperty(key, userToBeAdded[key]);
    }
  });

  test("getUsers", () => {
    const users = userRepository.getUsers();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThanOrEqual(1);
  });

  test("getUsersById", () => {
    const users = userRepository.getUserById(userAdded.userId);
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThanOrEqual(1);
  });

  test("deleteUserById", () => {
    const deleteResult = userRepository.deleteUserById(userAdded.userId);
    expect(deleteResult).toBeTruthy();
  });

  test("deleteUserById", () => {
    const deleteResult = userRepository.deleteUserById("inexistent-userId");
    expect(deleteResult).toBeFalsy();
  });

  test("deleteAll", () => {
    const deleteResult = userRepository.deleteAll();
    expect(deleteResult).toBeTruthy();
  });
});
