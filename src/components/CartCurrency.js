import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartCurrency = () => {
  const { currency, setCurrency } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className='alert alert-success'>
      <label htmlFor="currency">Moneda:</label>
      <select className='alert alert-success' id="currency" value={currency} onChange={handleCurrencyChange}>
        <option value="$">Dólar ($)</option>
        <option value="£">Libra (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupia (₹)</option>
      </select>
    </div>
  );
};

export default CartCurrency;
