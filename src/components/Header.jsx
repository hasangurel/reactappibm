import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Paradise Nursery</h1>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
