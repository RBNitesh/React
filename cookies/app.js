const express = require("express");
// This is an npm package
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("This is root");
});

app.get("/setcookies", (req, res) => {
  res.cookie("uid", 12345);
  res.cookie("origin", "India");
  res.send(`I send you a cookie`);
});

app.get("/signedcookies", (req, res) => {
  res.cookie("made-in", "India", { signed: true });
  res.send("signed cookie sent");
});

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);
  res.send("verified");
});

app.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  res.send("got the cookies");
});

app.listen(8000, () => {
  console.log(`server is listening on port 8000`);
});
