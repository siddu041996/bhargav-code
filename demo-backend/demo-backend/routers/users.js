const express = require("express");
const router = new express.Router();
const { getUsers, getUsersById } = require("../service/user_service");
const responseObject = require("../config/responseObject");

router.get("/users", async (req, res) => {
  const users = await getUsers();
  const data = responseObject({
    status: 200,
    message: "Fetched successfully",
    data: users,
  });
  res.send(data);
});

router.get("/users/:id", async (req, res) => {
  const {
    params: { id },
  } = req;
  const users = await getUsersById(id);
  const data = responseObject({
    status: 200,
    message: "Fetched successfully",
    data: users,
  });
  res.send(data);
});

module.exports = router;
