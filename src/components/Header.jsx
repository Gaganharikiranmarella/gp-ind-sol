import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">GP India Solutions</div>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  </header>
);

export default Header;
