import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 15,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    product: {
      type: String,
      trim: true,
    },

    place: {
      type: String,
      required: true,
      trim: true,
    },

    priceRange: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Form ||
  mongoose.model("Form", FormSchema);