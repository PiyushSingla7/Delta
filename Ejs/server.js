const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/home", (req, res) => {
  res.send("home page");
});
app.get("/rolldice", (req, res) => {
  let diceval = Math.floor(Math.random()*6)+1;
  res.render("rolldice",{num:diceval});
});
app.get("/ig/:username",(req,res)=>{
  let {username}=req.params;
  res.render("instagram",{username}) 
})
app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
