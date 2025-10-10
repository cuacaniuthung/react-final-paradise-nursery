import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import Header from '../components/Header';

export default function ShoppingCartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((t, i) => t + i.quantity, 0);
  const totalPrice = items.reduce((t, i) => t + i.price * i.quantity, 0);

  return (
    <div>
      <Header />
      <h1 style={{textAlign:'center'}}>🛒 Shopping Cart</h1>
      <p style={{textAlign:'center'}}>Total items: {totalItems} | Total price: ${totalPrice}</p>

      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        {items.map(item => (
          <div key={item.id} style={{display:'flex',alignItems:'center',border:'1px solid #ccc',padding:10,margin:5,width:400}}>
            <img src={item.image} alt={item.name} style={{width:80,height:80,objectFit:'cover',marginRight:10}}/>
            <div style={{flex:1}}>
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={{marginLeft:10}}>Delete</button>
          </div>
        ))}
      </div>

      <div style={{textAlign:'center',marginTop:20}}>
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
      </div>
    </div>
  );
}
