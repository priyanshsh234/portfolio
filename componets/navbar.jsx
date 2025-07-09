import React from "react";
import './navbar.css';
import portaset from '../portaset/portaset';
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact Us", href: "#contact" },
];

// Example portaset object for demonstration


const Navbar = () => {
  return (
    <nav style={{

        
        
    }}>
      <img
        src={portaset.photo}
        alt="Profile"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #00ffe7",
          boxShadow: "0 2px 8px rgba(0,255,231,0.15)",
          marginRight: "1.5rem"
        }}
      />
      <div className="ff">
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
          margin: 0,
          padding: 0,
          
        }}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "0.5rem 1rem",
                
                transition: "background 0.3s, transform 0.2s",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;