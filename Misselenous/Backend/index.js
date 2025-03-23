const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  const { username, password } = req.query;
  res.send(`Got GET request with username: ${username} and password: ${password}`);
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.send(`Got POST request with username: ${username} and password: ${password}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});