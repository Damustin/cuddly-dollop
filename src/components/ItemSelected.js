import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const ItemSelected = (props) => {
    const { dispatch, moneda } = useContext(AppContext);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');
    const [error, setError] = useState(false);

    const submitEvent = () => {
        // Validar si el valor ingresado en cantidad es numérico
        if (isNaN(quantity) || quantity === '') {
            setError(true);
            return;
        }

        const parsedQuantity = parseInt(quantity);

        // Validar si la cantidad excede el límite de 2000
        if (parsedQuantity > 2000) {
            setError(true);
            return;
        }

        const item = {
            name: name,
            quantity: parsedQuantity,
        };

        if (action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
            dispatch({
                type: 'ADD_QUANTITY',
                payload: item,
            });
        }

        // Reiniciar el estado de error
        setError(false);
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Shirt" name="Shirt">Shirt</option>
                        <option value="Dress" name="Dress">Dress</option>
                        <option value="Jeans" name="Jeans">Jeans</option>
                        <option value="Dinner set" name="Dinner set">Dinner set</option>
                        <option value="Bags" name="Bags">Bags</option>
                    </select>
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Quantity</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px' }}>{moneda}</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={quantity}
                        style={{ size: 10 }}
                        onChange={(event) => setQuantity(event.target.value)}>
                    </input>
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                {error && <div className="alert alert-danger">
                    {isNaN(quantity) ? 'only number' : 'must not exceed 2000.'}
                </div>}
            </div>
        </div>
    );
};

export default ItemSelected;
