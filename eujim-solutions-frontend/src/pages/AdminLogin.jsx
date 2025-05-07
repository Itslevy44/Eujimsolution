import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Replace with actual authentication logic
      if (email === 'admin@eujim.com' && password === 'admin123') {
        localStorage.setItem('adminToken', 'mock-admin-token');
        navigate('/admin-dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>ESA</h1>
          <div style={styles.logoSubtitle}>Admin Portal</div>
        </div>
        
        <h2 style={styles.title}>Admin Login</h2>
        <p style={styles.subtitle}>Enter your credentials to access the admin dashboard</p>
        
        {error && <div style={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@eujim.com" 
              required 
              style={styles.input} 
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required 
              style={styles.input} 
            />
            <div style={styles.forgotPassword}>
              Forgot password?
            </div>
          </div>
          
          <button 
            type="submit" 
            style={isLoading ? {...styles.button, ...styles.buttonLoading} : styles.button}
            disabled={isLoading}
          >
            {isLoading ? (
              <span style={styles.loadingSpinner}>
                <span style={styles.loadingDot}></span>
                <span style={styles.loadingDot}></span>
                <span style={styles.loadingDot}></span>
              </span>
            ) : 'Sign In'}
          </button>
        </form>
        
        <div style={styles.helpText}>
          Not an admin? <a href="/" style={styles.link}>Return to home</a>
        </div>
      </div>
      
      <div style={styles.infoCard}>
        <h3 style={styles.infoTitle}>Eujim Solutions Academy</h3>
        <p style={styles.infoText}>
          Welcome to the administrative portal. From here you can manage student profiles, 
          review employer registrations, and maintain the academy's operations.
        </p>
        <div style={styles.infoFooter}>
          <p>Need help? Contact IT support</p>
          <p>support@eujim.com | (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f7f9fc',
    fontFamily: "'Poppins', sans-serif",
  },
  loginCard: {
    flex: '1',
    maxWidth: '500px',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  logo: {
    color: '#1d8a4e',
    margin: '0 0.5rem 0 0',
    padding: '0.25rem 0.75rem',
    border: '2px solid #1d8a4e',
    borderRadius: '4px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoSubtitle: {
    color: '#666',
    fontSize: '1.25rem',
    fontWeight: '500',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '0.5rem',
    fontWeight: '600',
  },
  subtitle: {
    color: '#666',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  label: {
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#555',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    outline: 'none',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: '0.85rem',
    color: '#1d8a4e', 
    marginTop: '0.5rem',
    cursor: 'pointer',
  },
  errorMessage: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '0.75rem',
    borderRadius: '4px',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  button: {
    backgroundColor: '#1d8a4e',
    color: 'white',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48px',
  },
  buttonLoading: {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
  loadingSpinner: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
  loadingDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    animation: 'bounce 1.4s infinite ease-in-out both',
    animationDelay: (props) => `${props.index * 0.16}s`,
  },
  helpText: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666',
  },
  link: {
    color: '#1d8a4e',
    textDecoration: 'none',
    fontWeight: '500',
  },
  infoCard: {
    flex: '1',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1d8a4e',
    color: 'white',
    position: 'relative',
  },
  infoTitle: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  infoText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  infoFooter: {
    marginTop: 'auto',
    fontSize: '0.9rem',
    opacity: '0.8',
  },
};

export default AdminLogin;