import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";
import authRoutes from "./routes/auth.js"; // mevcut auth routes

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Auth routes
app.use("/api/auth", authRoutes);

// Stripe setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });
console.log("STRIPE_SECRET_KEY length:", process.env.STRIPE_SECRET_KEY?.length);


// Ödeme endpointi
app.post("/api/payment/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    console.log("Payment request amount:", amount);

    if (!amount) return res.status(400).json({ error: "Amount is required" });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "try",
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe error detay:", err);
    res.status(500).send({ error: err.message });
  }
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
