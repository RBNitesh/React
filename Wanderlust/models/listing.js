const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Review = require("./review");

// ceating the listing schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: { type: String, default: "listingimage" },
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/silhouette-photo-of-man-on-cliff-during-sunset-_6HzPU9Hyfg",
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

// deletes the reviews of a listing with its deletion
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

// creating the listing model
const Listing = mongoose.model("Listing", listingSchema);
// exporting the listing model
module.exports = Listing;
