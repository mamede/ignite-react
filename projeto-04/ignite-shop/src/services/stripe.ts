import Stripe from "stripe";

// @ts-ignore
export const stripe = new Stripe(process.env.SECRET_KEY_STRIPE, {
  apiVersion: "2023-08-16",
  appInfo: {
    name: 'Ignite Shop',
  }
})