import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/Image/logo.jfif" alt="logo" className='navbar-logo'/>
            </div>

            <div className="navbar-right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            
        </nav>


    );
};

export default Navbar;
