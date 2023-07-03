import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const PresupuestoForm = () => {
  const { dispatch,Location } = useContext(AppContext);
  const [presupuestoValue, setPresupuestoValue] = useState('');

  const handlePresupuestoSubmit = (e) => {
    e.preventDefault();

    const presupuesto = parseInt(presupuestoValue);

    if (presupuesto > 20000) {
      alert('El presupuesto no puede ser mayor a 20.000');
      return;
    }

    dispatch({ type: 'SET_PRESUPUESTO', payload: presupuesto });
  };

  const handleValueChange = (e) => {
    let value = parseInt(e.target.value);

    // Aumentar o disminuir el valor de 10 en 10
    if (!isNaN(value)) {
      const step = 10;
      const currentValue = parseInt(presupuestoValue) || 0;
      const newValue = value > currentValue ? currentValue + step : currentValue - step;
      value = newValue < 0 ? 0 : newValue;
    }

    setPresupuestoValue(value.toString());
  };

  return (
    <div className='alert alert-success'>
      <form onSubmit={handlePresupuestoSubmit}>
        <label htmlFor="presupuesto">Presupuesto:</label>
        <span  style={{ marginLeft: '2rem', marginRight: '8px' }}>{Location}</span>
        <input
          type="number"
          id="presupuesto"
          value={presupuestoValue}
          onChange={handleValueChange}
          required
        />
        <button className="btn btn-primary" type="submit">Guardar</button>
      </form>
      {presupuestoValue > 20000 && (
        <div className='alert alert-danger mt-3' role='alert'>
          El presupuesto no puede ser mayor a 20.000.
        </div>
      )}
    </div>
  );
};

export default PresupuestoForm;



