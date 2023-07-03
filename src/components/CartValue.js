import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
  const { expenses, moneda, presupuesto } = useContext(AppContext); // Reemplazado "Location" por "moneda"
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  if (totalExpenses > presupuesto) {
    return (
      <div className='alert alert-danger' role='alert'>
        El total de gastos no puede ser mayor al presupuesto
      </div>
    );
  }
  console.log({moneda})

  return (
    <div className='alert alert-primary' role='alert'>
      <span>Cart Value: {moneda}{totalExpenses}</span> {/* Reemplazado "Location" por "moneda" */}
    </div>
  );
};

export default CartValue;
