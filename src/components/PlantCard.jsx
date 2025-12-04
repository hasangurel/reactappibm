import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <div className="plant-image-container">
        <img src={plant.image} alt={plant.name} className="plant-image" />
      </div>
      <div className="plant-details">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">${plant.price.toFixed(2)}</span>
          <button
            className={`add-to-cart-btn ${isInCart ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
