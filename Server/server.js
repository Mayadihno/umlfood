const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const calculateOrderAmount = (items) => {
  const totalPrice = items * 100;
  return totalPrice;
};

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { items } = req.body;
    const paymentIntent = await Stripe.paymentIntents.create({
      currency: "dkk",
      amount: calculateOrderAmount(items),
      automatic_payment_methods: { enabled: true },
    });
    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
