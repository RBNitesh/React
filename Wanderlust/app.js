const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

// connecting to the database
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connect to db...");
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// setting up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
// to use the static content
app.use(express.static(path.join(__dirname, "/public")));

// root path
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// If the request route doesn't match to any of the path
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// custom error handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("listings/error.ejs", { message });
});

// starting the server
app.listen(8000, () => {
  console.log(`server is listening to port 8000`);
});
