import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import '../App.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [message, setMessage] = useState('');

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, amount: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, amount: -1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setMessage('Coming Soon!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">
            <span className="cart-icon">
              🛒<span className="cart-count">{totalCount}</span>
            </span>
          </Link>
        </div>
      </nav>

      <div className="cart-page">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}

            <h2 className="cart-total">
              Total Cart Amount: ${totalAmount.toFixed(2)}
            </h2>

            {message && (
              <p
                style={{
                  color: '#2e7d32',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                }}
              >
                {message}
              </p>
            )}

            <div className="cart-actions">
              <Link to="/products">
                <button className="continue-btn">Continue Shopping</button>
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartItem;
