const express = require("express");
const router = express.Router({ mergeParams: true });

const methodOverride = require("method-override");
const Listing = require("../models/listing");
const Review = require("../models/review.js");
const { reviewSchema } = require("../schema.js");
const asyncWrapper = require("../utils/asyncWrapper.js");
const ExpressError = require("../utils/ExpressError.js");

const validateReview = (req, res, next) => {
  let { err } = reviewSchema.validate(req.body);
  if (err) {
    throw new ExpressError(400, err);
  } else {
    next();
  }
};

// Post Review Route
router.post(
  "/",
  validateReview,
  asyncWrapper(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("new review saved");
    res.redirect(`/listings/${listing._id}`);
  }),
);

// Delete Review Route
router.delete(
  "/:reviewId",
  asyncWrapper(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
  }),
);

module.exports = router;
