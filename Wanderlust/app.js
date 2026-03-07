const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const asyncWrapper = require("./utils/asyncWrapper.js");
const ExpressError = require("./utils/ExpressError.js");

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

// index route for listing
app.get(
  "/listings",
  // handling error using asyncWrapper function
  asyncWrapper(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);

// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// show route
app.get(
  "/listings/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  }),
);

// Add New Listing Route
app.post(
  "/listings",
  asyncWrapper(async (req, res, next) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "Not a valid data for listing.");
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  }),
);

// Edit Listing Route
app.get(
  "/listings/:id/edit",
  asyncWrapper(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }),
);

// Update Route
app.put(
  "/listings/:id",
  asyncWrapper(async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "Not a valid data for listing.");
    }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }),
);

// Delete Route
app.delete(
  "/listings/:id",
  asyncWrapper(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  }),
);

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My new Villa",
//     description: "By the Mountain",
//     price: 50000,
//     location: "Kochi",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample is saved.");
//   res.send("successful testing");
// });

// If the request route doesn't match to any of the path
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// custom error handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).send(message);
});

// starting the server
app.listen(8000, () => {
  console.log(`server is listening to port 8000`);
});
