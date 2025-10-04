import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage(){
  const { items, totalItems, totalPrice } = useSelector(s => s.cart);
  const dispatch = useDispatch();
  const rows = Object.values(items);

  return (
    <div style={{padding:20}}>
      <h1>Your Shopping Cart</h1>
      <p>Total plants: {totalItems} — Total cost: ${totalPrice.toFixed(2)}</p>

      {rows.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/products"><button>Continue shopping</button></Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {rows.map(({product, quantity}) => (
              <li key={product.id} className="cart-row">
                <img src={product.thumbnail} alt={product.name} className="thumb-small"/>
                <div style={{flex:1}}>
                  <strong>{product.name}</strong>
                  <p>Unit price: ${product.price.toFixed(2)}</p>
                  <p>Subtotal: ${(product.price * quantity).toFixed(2)}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => dispatch(decrement(product.id))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => dispatch(increment(product.id))}>+</button>
                </div>
                <div>
                  <button onClick={() => dispatch(removeItem(product.id))}>Delete</button>
                </div>
              </li>
            ))}
          </ul>

          <div style={{marginTop:20}}>
            <Link to="/products"><button>Continue shopping</button></Link>
            <button style={{marginLeft:12}} onClick={() => alert('Coming Soon')}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
