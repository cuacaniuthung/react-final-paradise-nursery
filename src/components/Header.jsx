import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header(){
  const totalItems = useSelector(state => state.cart.totalItems);
  const loc = useLocation();

  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/"><h1>Paradise Nursery</h1></Link>
      </div>
      <nav className="nav">
        {loc.pathname !== '/products' && <Link to="/products">Products</Link>}
        {loc.pathname !== '/cart' && <Link to="/cart">Cart</Link>}
        <Link to="/cart" aria-label="View cart" className="cart-link">
          🛒 <span className="cart-count" aria-live="polite">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}
