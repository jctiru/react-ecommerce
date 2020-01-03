import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import Logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_k0zjPzo8Fm45BDMd2HBZ9sZP005Wtc69HN";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        token,
        amount: priceForStripe
      }
    })
      .then(response => {
        console.log("Payment successful: ", response);
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment failure: ", error);
        alert(
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
    />
  );
};

export default StripeCheckoutButton;
