const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routers/users");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(users);

const port = process.env.PORT || 8080;

app.listen(8080, () => console.log(`app listening on port ${port}`));
