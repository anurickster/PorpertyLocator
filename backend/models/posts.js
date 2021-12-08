import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategories",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  maxNoOfGuests: {
    type: Number,
    default: 2,
  },
});

const postModel = mongoose.model("posts", postSchema);
export default postModel;
