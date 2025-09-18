import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
}, { timestamps: true });

export default mongoose.model("User", userSchema);
