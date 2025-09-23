import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm: React.FC<{ totalPrice: number }> = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post("http://localhost:5000/api/payment/create-payment-intent", {
        amount: totalPrice * 100,
        currency: "try",
      });

      const clientSecret = res.data.clientSecret;
      const cardElement = elements.getElement(CardElement);

      if (!cardElement) throw new Error("Card information could not be obtained");

      const confirm = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (confirm.error) setMessage(confirm.error.message ?? "Payment failed");
      else if (confirm.paymentIntent?.status === "succeeded") setMessage("✅ Payment successful!");
    } catch (err: unknown) {
     if (err instanceof Error) {
    setMessage(err.message);
  } else {
    setMessage("An unknown error occurred.");
  }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "40px auto" }}>
      <h2>Checkout</h2>
      <p>Total Price: <strong>{totalPrice} ₺</strong></p>
      <div style={{ border: "1px solid #ddd", padding: 12, marginTop: 12 }}>
        <CardElement />
      </div>
      <button type="submit" disabled={!stripe || loading} style={{ marginTop: 12 }}>
        {loading ? "Processing..." : `${totalPrice} ₺ Pay`}
      </button>
      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </form>
  );
};

export default CheckoutForm;
