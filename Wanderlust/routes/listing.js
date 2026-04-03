const express = require("express");
const router = express.Router({
  caseSensitive: true,
  mergeParams: true,
  strict: true,
});

const methodOverride = require("method-override");
const Listing = require("../models/listing");
const { listingSchema } = require("../schema.js");
const asyncWrapper = require("../utils/asyncWrapper.js");
const ExpressError = require("../utils/ExpressError.js");

const validateListing = (req, res, next) => {
  // Validate the incoming form body before any database write happens.
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
    // Populate replaces review ids with full review documents for the show page.
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("error", "Listing that you requested doesn't exists!");
      res.redirect("/listings");
    } else res.render("listings/show.ejs", { listing });
  }),
);

// Add New Listing Route
router.post(
  "/",
  validateListing,
  asyncWrapper(async (req, res, next) => {
    // Joi expects the payload shape to be req.body.listing, so we pass that object into Mongoose.
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  }),
);

// Update Route
router.put(
  "/:id",
  validateListing,
  asyncWrapper(async (req, res) => {
    let { id } = req.params;
    // Spread only the submitted listing fields into the update query.
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    req.flash("success", "Listing's information successfully updated!");
    res.redirect(`/listings/${id}`);
  }),
);

// Delete Route
router.delete(
  "/:id",
  asyncWrapper(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing successfully deleted!");
    res.redirect("/listings");
  }),
);

// Edit Listing Route
router.get(
  "/:id/edit",
  asyncWrapper(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing that you requested doesn't exists!");
      res.redirect("/listings");
    } else res.render("listings/edit.ejs", { listing });
  }),
);

module.exports = router;
