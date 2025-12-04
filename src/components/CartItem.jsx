import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const totalPrice = (item.price * item.quantity).toFixed(2);

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-unit-price">Unit Price: ${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={handleDecrease}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button className="quantity-btn" onClick={handleIncrease}>
            +
          </button>
        </div>

        <div className="cart-item-total">
          <span className="total-label">Subtotal:</span>
          <span className="total-price">${totalPrice}</span>
        </div>

        <button className="delete-btn" onClick={handleRemove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
