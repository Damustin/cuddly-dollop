import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
  const { expenses, Location, presupuesto } = useContext(AppContext);
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

  return (
    <div className='alert alert-primary' role='alert'>
      <span>Cart Value: {Location}{totalExpenses}</span>
    </div>
  );
};

export default CartValue;

