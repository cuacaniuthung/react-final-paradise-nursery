import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const inCart = useSelector(state => !!state.cart.items[product.id]);

  const handleAdd = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} className="thumb"/>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAdd} disabled={inCart}>
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
