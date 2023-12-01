const express = require("express");
const userRepository = require("./users");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/users", (_req, res) => {
  res.json(userRepository.getUsers());
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  res.json(userRepository.getUserById(userId));
});

app.post("/users", (req, res) => {
  const addResult = userRepository.addUser(req.body);
  res.json(addResult);
});

app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const deleteResult = userRepository.deleteUserById(userId);
  res.json(`User ${userId} ${deleteResult ? "" : "no"} deleted`);
});

app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const deleteResult = userRepository.deleteUserById(userId);
  res.json(`User ${userId} ${deleteResult ? "" : "no"} deleted`);
});

app.delete("/users/", (_req, res) => {
  const deleteResult = userRepository.deleteAll();
  res.json(`${deleteResult? "All users deleted": "All user wasnt deleted"}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
