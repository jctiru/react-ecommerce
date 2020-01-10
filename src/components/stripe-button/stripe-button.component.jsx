import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useAlert } from "react-alert";

import Logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price, disabled = false }) => {
  const alert = useAlert();
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_k0zjPzo8Fm45BDMd2HBZ9sZP005Wtc69HN";
  const onToken = token => {
    axios({
      url:
        "https://vpsa5ic114.execute-api.us-east-1.amazonaws.com/prod/payment",
      method: "post",
      data: {
        token,
        amount: priceForStripe
      }
    })
      .then(response => {
        alert.success("Payment successful");
      })
      .catch(error => {
        alert.error(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Ecommerce"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      disabled={disabled}
    />
  );
};

export default StripeCheckoutButton;
