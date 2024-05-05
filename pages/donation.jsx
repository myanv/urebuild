import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Donation() {
  const [clientSecret, setClientSecret] = React.useState("");
  const [donation, setDonation] = React.useState(0);

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    handleDonation(0);
  }, []);
 
  const handleDonation = async (amount) => {
    setDonation(amount);

    // Create a payment intent with the specified amount
    // This code runs when a donation button is clicked
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  };

  const handleSubmit = (input) => {
    input.preventDefault();
    const value = parseFloat(input.target.value);
    console.log(value);
    handleDonation(value);
  }

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
        <div className="max-w-[960px] flex m-auto shadow-md mt-[10vh] min-h-[150px]">
          <div className="self-start w-[50%]">
            <img className="mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/2560px-A-Cat.jpg"></img>
            <h1 className="font-bold text-center text-[30px]">Donation Placeholder Text</h1>
            <p className="ml-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur, nulla ut hic excepturi quia unde dolore! Explicabo, eligendi voluptatibus.</p>
            <div className="flex justify-center space-x-3 my-8">
              <button onClick={() => handleDonation(5)} className="btn btn-neutral">Donate $5</button>
              <button onClick={() => handleDonation(10)} className="btn btn-neutral">Donate $10</button>
              <label className="input w-[30%] input-bordered flex items-center gap-2">
                <span>Custom:</span>
                <input type="text" className="grow" placeholder="0" onChange={handleSubmit}/>
              </label>
            </div>
          </div>
          <div className="Donation w-[50%] ml-3">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <h1>You have selected a donation of ${donation}</h1>
                <CheckoutForm />
              </Elements>
            )}
          </div>
          
        </div>
    </>
  )
}