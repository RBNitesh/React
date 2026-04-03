const Joi = require("joi");

// The Joi shape mirrors the nested names used by the HTML form fields.
const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.object({
      filename: Joi.string().allow("", null),
      url: Joi.string().required(),
    }).required(),
    price: Joi.number().min(0).required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
});

// Reviews are submitted under req.body.review from the listing show page form.
const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

module.exports = { listingSchema, reviewSchema };
