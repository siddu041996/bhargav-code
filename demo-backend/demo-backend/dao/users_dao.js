const { connectDB } = require("../config/database");
var pool = connectDB();

const getUsersQuery = async () => {
  let query = `select * from userinfo`;
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.query(query, (err, results) => {
        if (err) {
          console.log(err);
          connection.release();
          reject(err);
        }
        connection.release();
        resolve(results);
      });
    });
  });
};

const getUsersByIdQuery = async (id) => {
  let query = `select * from userinfo where id = ?`;
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.query(query, [id], (err, results) => {
        if (err) {
          console.log(err);
          connection.release();
          reject(err);
        }
        connection.release();
        resolve(results);
      });
    });
  });
};

module.exports = { getUsersQuery, getUsersByIdQuery };
