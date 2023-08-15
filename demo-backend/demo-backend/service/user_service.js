const { getUsersQuery, getUsersByIdQuery } = require("../dao/users_dao");

const getUsers = async () => {
  return await getUsersQuery();
};

const getUsersById = async (id) => {
  return await getUsersByIdQuery(id);
};

module.exports = { getUsers, getUsersById };
