


import React, { useState } from 'react';
import './Paymentform.css';



const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to handle the form submission, such as sending the payment details to a server for processing.
    // You can use payment processing libraries like Stripe or Braintree to handle the payment processing on the server.
    // For this example, we won't process the payment; we'll just log the payment details.
    console.log('Payment submitted:');
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
    console.log('Name:', name);

    // Reset the form after submission
    setCardNumber('');
    setExpirationDate('');
    setCVV('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
        />
      </label>
      <br />
      <label>
        Expiration Date:
        <input
          type="text"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          placeholder="MM/YY"
        />
      </label>
      <br />
      <label>
        CVV:
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          placeholder="123"
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
      </label>
      <br />
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
