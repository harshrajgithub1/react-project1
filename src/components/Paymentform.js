import React from 'react';
import { useForm } from 'react-hook-form';


const PaymentForm = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        ref={register({ required: 'Card number is required' })}
      />
      {errors.cardNumber && <span>{errors.cardNumber.message}</span>}

      <label htmlFor="expiryDate">Expiry Date</label>
      <input
        type="text"
        id="expiryDate"
        name="expiryDate"
        ref={register({ required: 'Expiry date is required' })}
      />
      {errors.expiryDate && <span>{errors.expiryDate.message}</span>}

      <label htmlFor="cvv">CVV</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        ref={register({ required: 'CVV is required' })}
      />
      {errors.cvv && <span>{errors.cvv.message}</span>}

      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
