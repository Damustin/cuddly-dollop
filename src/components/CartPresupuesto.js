import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const PresupuestoForm = () => {
  const { dispatch } = useContext(AppContext);
  const [presupuestoValue, setPresupuestoValue] = useState('');

  const handlePresupuestoSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_PRESUPUESTO', payload: parseInt(presupuestoValue) });
  };

  return (
    <div className='alert alert-success'>
    <form onSubmit={handlePresupuestoSubmit}>
      <label htmlFor="presupuesto">Presupuesto:</label>
      <input
        type="number"
        id="presupuesto"
        value={presupuestoValue}
        onChange={(e) => setPresupuestoValue(e.target.value)}
        required
      />
      <button type="submit">Guardar</button>
    </form>
    </div>
  );
};

export default PresupuestoForm;
