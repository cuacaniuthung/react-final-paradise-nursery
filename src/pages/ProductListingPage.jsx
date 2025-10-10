import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';
import './ProductListingPage.css'; 


const plants = [
  { id: 1, name: 'Snake Plant', price: 10, category: 'Indoor', image: '/images/anh1.jpg' },
  { id: 2, name: 'Aloe Vera', price: 12, category: 'Succulent', image: '/images/anh2.jpg' },
  { id: 3, name: 'Spider Plant', price: 8, category: 'Indoor', image: '/images/anh3.jpg' },
  { id: 4, name: 'Peace Lily', price: 15, category: 'Flowering', image: '/images/anh4.jpg' },
  { id: 5, name: 'Cactus', price: 7, category: 'Succulent', image: '/images/anh5.jpg' },
  { id: 6, name: 'Fern', price: 9, category: 'Hanging', image: '/images/anh6.jpg' },
];

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = (id) => cartItems.some(item => item.id === id);

  return (
    <div>
      <Header />
      <h1 style={{textAlign:'center'}}>🪴 Our Plants</h1>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {plants.map(p => (
          <div key={p.id} style={{border:'1px solid #738b6fff',margin:10,padding:10,width:180,textAlign:'center'}}>
            <img src={p.image} alt={p.name} style={{width:'100%',height:120,objectFit:'cover'}} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button
              disabled={isAdded(p.id)}
              onClick={() => dispatch(addToCart(p))}
            >
              {isAdded(p.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
