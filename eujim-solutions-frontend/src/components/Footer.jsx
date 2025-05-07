import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#1a202c', // dark gray/blue background
      color: 'white',
      paddingTop: '3rem',
      paddingBottom: '2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'white',
    },
    sectionText: {
      color: '#a0aec0', // medium gray
      marginBottom: '1rem',
      lineHeight: '1.6',
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem',
    },
    socialIcon: {
      color: '#a0aec0',
      transition: 'color 0.2s',
      cursor: 'pointer',
    },
    linksList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: '0.5rem',
    },
    link: {
      color: '#a0aec0',
      textDecoration: 'none',
      transition: 'color 0.2s',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '0.75rem',
    },
    contactIcon: {
      color: '#4299e1', // blue accent color
      marginRight: '0.75rem',
      flexShrink: 0,
      marginTop: '0.25rem',
    },
    divider: {
      borderTop: '1px solid #2d3748', // slightly lighter border
      marginTop: '2.5rem',
      paddingTop: '1.5rem',
      textAlign: 'center',
      color: '#a0aec0',
    },
    formContainer: {
      marginTop: '1rem',
    },
    inputField: {
      backgroundColor: '#2d3748',
      border: 'none',
      borderRadius: '0.25rem',
      padding: '0.75rem',
      width: '100%',
      marginBottom: '0.75rem',
      color: 'white',
    },
    button: {
      backgroundColor: '#4299e1',
      color: 'white',
      border: 'none',
      borderRadius: '0.25rem',
      padding: '0.75rem 1.5rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.2s',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Company Info */}
          <div>
            <h3 style={styles.sectionTitle}>Eujim Solutions</h3>
            <p style={styles.sectionText}>
              Empowering talent. Connecting futures. Building success together.
            </p>
            <div style={styles.socialIcons}>
              <span style={styles.socialIcon} 
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </span>
              <span style={styles.socialIcon}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                </svg>
              </span>
              <span style={styles.socialIcon}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </span>
              <span style={styles.socialIcon}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={styles.sectionTitle}>Quick Links</h3>
            <ul style={styles.linksList}>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}
                   onMouseOver={(e) => e.target.style.color = 'white'}
                   onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                  Home
                </a>
              </li>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}
                   onMouseOver={(e) => e.target.style.color = 'white'}
                   onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                  About Us
                </a>
              </li>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}
                   onMouseOver={(e) => e.target.style.color = 'white'}
                   onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                  Services
                </a>
              </li>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}
                   onMouseOver={(e) => e.target.style.color = 'white'}
                   onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                  Careers
                </a>
              </li>
              <li style={styles.linkItem}>
                <a href="#" style={styles.link}
                   onMouseOver={(e) => e.target.style.color = 'white'}
                   onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={styles.sectionTitle}>Contact Us</h3>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </span>
              <div>
                <p style={styles.sectionText}>123 Business Park,</p>
                <p style={styles.sectionText}>Innovation Drive,</p>
                <p style={styles.sectionText}>San Francisco, CA 94107</p>
              </div>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"></path>
                </svg>
              </span>
              <p style={styles.sectionText}>contact@eujimsolutions.com</p>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                </svg>
              </span>
              <p style={styles.sectionText}>(555) 123-4567</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 style={styles.sectionTitle}>Newsletter</h3>
            <p style={styles.sectionText}>
              Stay updated with our latest news and offerings by subscribing to our newsletter.
            </p>
            <div style={styles.formContainer}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={styles.inputField}
              />
              <button 
                style={styles.button}
                onMouseOver={(e) => e.target.style.backgroundColor = '#3182ce'} 
                onMouseOut={(e) => e.target.style.backgroundColor = '#4299e1'}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div style={styles.divider}>
          <p>© {new Date().getFullYear()} Eujim Solutions. All rights reserved.</p>
          <div style={{...styles.socialIcons, justifyContent: 'center', marginTop: '1rem'}}>
            <a href="#" style={{...styles.link, margin: '0 0.5rem'}}
               onMouseOver={(e) => e.target.style.color = 'white'}
               onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
              Privacy Policy
            </a>
            <a href="#" style={{...styles.link, margin: '0 0.5rem'}}
               onMouseOver={(e) => e.target.style.color = 'white'}
               onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
              Terms of Service
            </a>
            <a href="#" style={{...styles.link, margin: '0 0.5rem'}}
               onMouseOver={(e) => e.target.style.color = 'white'}
               onMouseOut={(e) => e.target.style.color = '#a0aec0'}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;