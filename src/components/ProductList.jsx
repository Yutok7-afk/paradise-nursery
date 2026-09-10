import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';
import '../App.css';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, img: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400' },
      { id: 2, name: 'Spider Plant', price: 12, img: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
      { id: 3, name: 'Peace Lily', price: 18, img: 'https://images.unsplash.com/photo-1612363148951-15c7f3e4b6b6?w=400' },
      { id: 4, name: 'Boston Fern', price: 14, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400' },
      { id: 5, name: 'Rubber Plant', price: 20, img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
      { id: 6, name: 'Aloe Vera', price: 10, img: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { id: 7, name: 'Jade Plant', price: 14, img: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { id: 8, name: 'Echeveria', price: 9, img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
      { id: 9, name: 'Haworthia', price: 11, img: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400' },
      { id: 10, name: 'Zebra Cactus', price: 13, img: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?w=400' },
      { id: 11, name: 'Panda Plant', price: 12, img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
      { id: 12, name: 'Burro\'s Tail', price: 16, img: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { id: 13, name: 'Orchid', price: 25, img: 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=400' },
      { id: 14, name: 'Anthurium', price: 22, img: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400' },
      { id: 15, name: 'African Violet', price: 16, img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
      { id: 16, name: 'Begonia', price: 19, img: 'https://images.unsplash.com/photo-1596724878581-1c8f4b0f5a8e?w=400' },
      { id: 17, name: 'Kalanchoe', price: 17, img: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { id: 18, name: 'Cyclamen', price: 21, img: 'https://images.unsplash.com/photo-1612363148951-15c7f3e4b6b6?w=400' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedIds, setAddedIds] = useState([]);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedIds((prev) => [...prev, plant.id]);
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

      <div className="product-list">
        <h1>Our Plants</h1>

        {plantsData.map((cat) => (
          <div key={cat.category} className="category">
            <h2>{cat.category}</h2>
            <div className="plants-grid">
              {cat.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.img} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price}</p>
                  <button
                    onClick={() => handleAdd(plant)}
                    disabled={addedIds.includes(plant.id)}
                  >
                    {addedIds.includes(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
