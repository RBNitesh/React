const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();

app.get("/", (req, res) => {
  res.send("running...");
});

const checkToken = (req, res, next) => {
  let { q } = req.query;
  if (q === "giveaccess") {
    next();
  }
  // custom error class
  throw new ExpressError(401, "ACCESS DENIED!"); // First Error Handler
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

// Handling error using custoem error handler class
app.get("/admin", (request, response) => {
  throw new ExpressError(403, "Access to admin is forbidden!");
});

app.get("/err", (req, res) => {
  err = err;
});

app.use((err, req, res, next) => {
  // Second Error Handler
  console.log("Error is detected using custom error handling middleware");
  res
    .status(err.status || 500)
    .json({ message: err.message, status: err.status || 500 });
  // next(err); // this passes the error to default handler which print the stack
  // next(); // calling non error handling middleware
});

// starting the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is listening to port 8000`);
});
