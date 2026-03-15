const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("This is root");
});

let a = 5;

const middleware1 = (req, res, next) => {
  console.log(`Middleware1 is executed.`);
  a *= 5;
  next("route");
};

const middleware2 = (req, res, next) => {
  console.log(`Middleware2 is executed.`);
  a *= 5;
  next();
};

const middleware3 = (req, res) => {
  console.log(`Middleware3 is executed.`);
  a *= 5;
  res.send(a);
};

// Register middleware
// app.use("/users", [middleware1, middleware2, middleware3]);

// Define route handler
app.get("/users", middleware1, middleware2, middleware3);

app.get("/users", (req, res) => {
  res.send(`middlewares are skipped`);
});

const Port = 8080;
app.listen(Port, function () {
  console.log(`server is listening at ${Port}`);
});
