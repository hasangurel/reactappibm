import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-cart-message">Your cart is empty</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p className="cart-info">
                Total Items: <strong>{totalQuantity}</strong>
              </p>
              <p className="cart-info">
                Total Cost: <strong className="total-amount">${totalCost.toFixed(2)}</strong>
              </p>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
