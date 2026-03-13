const express = require("express");
const router = express.Router();

const methodOverride = require("method-override");
const Listing = require("../models/listing");
const { listingSchema } = require("../schema.js");
const asyncWrapper = require("../utils/asyncWrapper.js");
const ExpressError = require("../utils/ExpressError.js");

const validateListing = (req, res, next) => {
  let { err } = listingSchema.validate(req.body);
  if (err) {
    throw new ExpressError(400, err);
  } else {
    next();
  }
};

// index route for listing
router.get(
  "/",
  // handling error using asyncWrapper function
  asyncWrapper(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);

// New Route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// show route
router.get(
  "/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  }),
);

// Add New Listing Route
router.post(
  "/",
  validateListing,
  asyncWrapper(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  }),
);

// Update Route
router.put(
  "/:id",
  validateListing,
  asyncWrapper(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }),
);

// Delete Route
router.delete(
  "/:id",
  asyncWrapper(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  }),
);

// Edit Listing Route
router.get(
  "/:id/edit",
  asyncWrapper(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }),
);

module.exports = router;
