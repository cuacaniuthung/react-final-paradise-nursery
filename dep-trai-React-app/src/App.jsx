import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
    </Routes>
  );
}

export default App;
