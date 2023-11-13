import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; // Make sure to create a corresponding CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    {/* Link to home page */}
                    <Link to="/">HaPPE Earth</Link>
                </div>
                <ul className="nav-links">
                    {/* Each list item is a link to a different route */}
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/impact">Impact</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;