const mongoose = require("mongoose");

const trendingSchema = new mongoose.Schema({
  small: {
    type: String,
    required: [true, "Please provide small trending thumbnail"],
  },
  large: {
    type: String,
    required: [true, "Please provide large trending thumbnail"],
  },
});

const regularSchema = new mongoose.Schema({
  small: {
    type: String,
    required: [true, "Please provide small regular thumbnail"],
  },
  medium: {
    type: String,
    required: [true, "Please provide medium regular thumbnail"],
  },
  large: {
    type: String,
    required: [true, "Please provide large regular thumbnail"],
  },
});



const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  thumbnail: [{
    trending: {
      small: {
        type: String,
        required: [true, "Please provide small trending thumbnail"],
      },
      large: {
        type: String,
        required: [true, "Please provide large trending thumbnail"],
      },
    },
    regular: {
      small: {
        type: String,
        required: [true, "Please provide small regular thumbnail"],
      },
      medium: {
        type: String,
        required: [true, "Please provide medium regular thumbnail"],
      },
      large: {
        type: String,
        required: [true, "Please provide large regular thumbnail"],
      },
    }
  }],
  year: {
    type: Number,
    required: [true, "Please provide a realease year"],
  },
  category: {
    type: String,
    required: [true, "Please provide a category"],
  },
  rating: {
    type: String,
    required: [true, "Please provide a rating"],
  },
  isBookmarked: {
    type: Boolean,
    required: [true, "Please indicate if item is bookmarked"],
    default: false,
  },
  isTrending: {
    type: Boolean,
    required: [true, "Please indicate if item is trending"],
    default: false,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
