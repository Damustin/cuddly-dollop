import React, { createContext, useReducer, useState } from 'react';

export const AppReducer = (state, action) => {
  let newExpenses = [];
  switch (action.type) {
    case 'ADD_QUANTITY':
      let updatedQty = false;
      state.expenses.forEach((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity += action.payload.quantity;
          updatedQty = true;
        }
        newExpenses.push(expense);
      });
      return {
        ...state,
        expenses: newExpenses,
      };
    case 'RED_QUANTITY':
      state.expenses.forEach((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity -= action.payload.quantity;
        }
        expense.quantity = expense.quantity < 0 ? 0 : expense.quantity;
        newExpenses.push(expense);
      });
      return {
        ...state,
        expenses: newExpenses,
      };
    case 'DELETE_ITEM':
      state.expenses.forEach((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity = 0;
        }
        newExpenses.push(expense);
      });
      return {
        ...state,
        expenses: newExpenses,
      };
    case 'CHG_LOCATION':
      return {
        ...state,
        Location: action.payload,
      };
    case 'SET_PRESUPUESTO':
      return {
        ...state,
        presupuesto: action.payload,
      };
    case 'SET_MONEDA':
      return {
        ...state,
        moneda: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  expenses: [
    { id: 'Shirt', name: 'Shirt', quantity: 0, unitprice: 500 },
    { id: 'Jeans', name: 'Jeans', quantity: 0, unitprice: 300 },
    { id: 'Dress', name: 'Dress', quantity: 0, unitprice: 400 },
    { id: 'Dinner set', name: 'Dinner set', quantity: 0, unitprice: 600 },
    { id: 'Bags', name: 'Bags', quantity: 0, unitprice: 200 },
  ],
  Location: '£',
  presupuesto: 0,
  moneda: '$',
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  if (totalExpenses > state.presupuesto) {
    alert('El valor total de gastos supera el presupuesto establecido');
  }

  return (
<AppContext.Provider
      value={{
        expenses: state.expenses,
        CartValue: totalExpenses,
        dispatch,
        moneda: state.moneda, // Agrega la propiedad 'moneda' al valor del contexto
        setMoneda: (value) => dispatch({ type: 'SET_MONEDA', payload: value }), // Agrega la función 'setMoneda' al valor del contexto
        presupuesto: state.presupuesto,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
