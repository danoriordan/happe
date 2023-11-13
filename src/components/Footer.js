import React from 'react';
import './css/Footer.css'; // Make sure to create a corresponding CSS file for styling

const Footer = () => {
    const year = new Date().getFullYear(); // Dynamic year for copyright message

    return (
        <footer className="footer">
            <p>© {year} HaPPE Earth. All rights reserved.</p>
            {/* You can add social media links or other information here */}
        </footer>
    );
};

export default Footer;
