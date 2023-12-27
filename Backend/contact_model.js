import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    message: {type: String, required: true}
  },
  { collection: "contact-us" }
);

const contactModel = mongoose.model("contactModel", contactSchema);

export default contactModel;
