import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaShoppingBasket } from 'react-icons/fa';


const ExpenseItem = (props) => {
    const { dispatch, moneda } = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };
        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleRestItem = () => {
        if (props.quantity === 0) {
          // Evitar restar si la cantidad es cero
          return;
        }
        
        const item = {
          name: props.name,
          quantity: -10,
        };
        
        dispatch({
          type: 'ADD_QUANTITY',
          payload: item,
        });
      };
      
    

    const handleAddItem = () => {
        const item = {
            name: props.name,
            quantity: 10,
        };
        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{moneda}{parseInt(props.unitprice)}</td>
            <td>{moneda}{parseInt(props.quantity) * parseInt(props.unitprice)}</td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleRestItem}></FaTimesCircle></td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddItem}></FaPlusCircle></td>
            <td><FaShoppingBasket size="2.2em" color="grey" onClick={handleDeleteItem}></FaShoppingBasket></td>
        </tr>
    );
};

export default ExpenseItem;
