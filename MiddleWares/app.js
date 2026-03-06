const express = require("express");
const app = express();

app.get("/err", (req, res) => {
  err = err;
});

app.get("/", (req, res) => {
  res.send("running...");
});

app.use((err, req, res, next) => {
  console.log("Error is detected using custom error handling middleware");
  res.status(500).json({ message: "Internal Server Error" });
  //   next(err); // this passes the error to default handler which print the stack
});

// starting the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is listening to port 8000`);
});
