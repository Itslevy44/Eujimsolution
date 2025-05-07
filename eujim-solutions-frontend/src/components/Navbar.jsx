import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ hideNav }) => {
  if (hideNav) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/adminlogin');
  };

  const handleForEmployers = (e) => {
    e.preventDefault();
    navigate('/employerlogin');
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5%',
      background: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      fontFamily: "'Poppins', sans-serif",
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#1d8a4e',
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    logoIcon: {
      marginRight: '0.5rem',
      fontSize: '1.8rem',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: '1rem',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      transition: 'all 0.3s ease',
    },
    menuToggle: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#1d8a4e',
      transition: 'all 0.2s ease',
      '@media (max-width: 768px)': {
        display: 'block',
      }
    },
    navLink: {
      textDecoration: 'none',
      color: '#555',
      fontWeight: 500,
      fontSize: '1rem',
      position: 'relative',
      padding: '0.5rem 0',
      transition: 'all 0.3s ease',
    },
    authButtons: {
      display: 'flex',
      gap: '1rem',
      '@media (max-width: 768px)': {
        display: 'none',
      }
    },
    loginBtn: {
      backgroundColor: 'transparent',
      color: '#1d8a4e',
      padding: '0.5rem 1.5rem',
      border: '2px solid #1d8a4e',
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavLinks = (isMobile = false) => {
    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'Programs', path: '/programs' },
      { name: 'For Employers', path: '#', handler: handleForEmployers },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ];

    return navItems.map((item, index) => (
      <a
        key={index}
        href={item.path}
        onClick={item.handler}
        style={styles.navLink}
        onMouseOver={(e) => {
          e.target.style.color = '#1d8a4e';
          const afterEl = document.createElement('div');
          afterEl.style.position = 'absolute';
          afterEl.style.bottom = '0';
          afterEl.style.left = '0';
          afterEl.style.width = '100%';
          afterEl.style.height = '2px';
          afterEl.style.backgroundColor = '#1d8a4e';
          afterEl.style.transition = 'all 0.3s ease';
          e.target.appendChild(afterEl);
        }}
        onMouseOut={(e) => {
          e.target.style.color = '#555';
          const afterElements = e.target.querySelectorAll('div');
          afterElements.forEach(el => el.remove());
        }}
      >
        {item.name}
      </a>
    ));
  };

  return (
    <nav style={styles.navbar}>
      <a href="/" style={styles.logo}>
        <span style={styles.logoIcon}>🌱</span>
        Eujim Solutions
      </a>

      <div style={styles.navLinks}>
        {renderNavLinks()}
      </div>

      <div style={styles.authButtons}>
        <button 
          style={styles.loginBtn}
          onClick={handleLogin}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#e8f5e9';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Log In
        </button>
      </div>

      <button 
        style={styles.menuToggle}
        onClick={toggleMenu}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          {renderNavLinks(true)}
          <button 
            style={{...styles.loginBtn, width: '100%', marginTop: '1rem'}}
            onClick={handleLogin}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e8f5e9';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
