import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

export default function Header() {
  const totalItems = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/products" className="logo">🌿 Paradise Nursery</Link>
      <nav>
        <Link to="/cart" className="cart-link">🛒 Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}
