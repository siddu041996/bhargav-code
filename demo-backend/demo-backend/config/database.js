const mysql = require("mysql");

const pool = mysql.createPool({
  host: "mysqlpod",
  user: "root",
  password: "password123",
  database: "students",
  port: 3306,
});

pool.getConnection((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});
connectDB = () => {
  return pool;
};

module.exports = { connectDB };
