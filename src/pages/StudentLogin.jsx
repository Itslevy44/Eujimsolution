import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
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
      if (email && password) {
        localStorage.setItem('studentToken', 'mock-student-token');
        navigate('/student-profile');
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
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.imageSection}>
          <div style={styles.overlay}></div>
          <div style={styles.textOverlay}>
            <h2 style={styles.imageTitle}>Building Your Future</h2>
            <p style={styles.imageText}>
              Access your student portal to track your progress, connect with employers, 
              and take the next step in your career journey.
            </p>
          </div>
        </div>

        <div style={styles.formSection}>
          <div style={styles.formContainer}>
            <div style={styles.logoContainer}>
              <h1 style={styles.logo}>ESA</h1>
              <div style={styles.logoSubtitle}>Student Portal</div>
            </div>
            
            <h2 style={styles.welcomeText}>Welcome Back!</h2>
            <p style={styles.subText}>Sign in to continue your learning journey</p>
            
            {error && <div style={styles.errorMessage}>{error}</div>}
            
            <form onSubmit={handleLogin} style={styles.form}>
              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input 
                  id="email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com" 
                  required 
                  style={styles.input} 
                />
              </div>
              
              <div style={styles.inputGroup}>
                <label htmlFor="password" style={styles.label}>Password</label>
                <input 
                  id="password"
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required 
                  style={styles.input} 
                />
              </div>
              
              <div style={styles.optionsRow}>
                <div style={styles.checkboxContainer}>
                  <input 
                    type="checkbox" 
                    id="rememberMe" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    style={styles.checkbox} 
                  />
                  <label htmlFor="rememberMe" style={styles.checkboxLabel}>Remember me</label>
                </div>
                <a href="#forgot-password" style={styles.forgotPassword}>Forgot password?</a>
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
            
            <div style={styles.footer}>
              <p style={styles.footerText}>
                Don't have an account? <a href="#contact" style={styles.link}>Contact administration</a>
              </p>
              <p style={styles.footerText}>
                <a href="/" style={styles.link}>Return to home</a>
              </p>
            </div>
            
            <div style={styles.additionalHelp}>
              <h4 style={styles.helpTitle}>Need Help?</h4>
              <div style={styles.helpOptions}>
                <div style={styles.helpOption}>
                  <span style={styles.helpIcon}>📚</span>
                  <span>Academic Support</span>
                </div>
                <div style={styles.helpOption}>
                  <span style={styles.helpIcon}>💻</span>
                  <span>Technical Support</span>
                </div>
                <div style={styles.helpOption}>
                  <span style={styles.helpIcon}>💼</span>
                  <span>Career Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#f7f9fc',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    display: 'flex',
    width: '90%',
    maxWidth: '1200px',
    minHeight: '600px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.07)',
  },
  imageSection: {
    flex: '1',
    backgroundColor: '#1d8a4e',
    position: 'relative',
    backgroundImage: "url('/api/placeholder/600/800')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(29, 138, 78, 0.85)',
    zIndex: 1,
  },
  textOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'white',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 2,
  },
  imageTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
  },
  imageText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    opacity: '0.9',
  },
  formSection: {
    flex: '1',
    backgroundColor: 'white',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  logo: {
    color: '#1d8a4e',
    margin: '0',
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
    marginLeft: '0.5rem',
  },
  welcomeText: {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#333',
  },
  subText: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#555',
  },
  input: {
    padding: '0.75rem 1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.2s',
    outline: 'none',
    '&:focus': {
      borderColor: '#1d8a4e',
      boxShadow: '0 0 0 2px rgba(29, 138, 78, 0.1)',
    },
  },
  optionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.9rem',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    accentColor: '#1d8a4e',
    marginRight: '0.5rem',
  },
  checkboxLabel: {
    color: '#555',
    cursor: 'pointer',
  },
  forgotPassword: {
    color: '#1d8a4e',
    textDecoration: 'none',
    fontWeight: '500',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  errorMessage: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '0.75rem',
    borderRadius: '8px',
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
    marginTop: '0.5rem',
    '&:hover': {
      backgroundColor: '#156b3f',
    },
  },
  buttonLoading: {
    opacity: '0.7',
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
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '0.9rem',
    color: '#666',
    margin: '0.5rem 0',
  },
  link: {
    color: '#1d8a4e',
    textDecoration: 'none',
    fontWeight: '500',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  additionalHelp: {
    marginTop: '2.5rem',
    padding: '1.5rem',
    backgroundColor: '#f7f9fc',
    borderRadius: '12px',
  },
  helpTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  helpOptions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  helpOption: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    cursor: 'pointer',
    color: '#555',
    transition: 'all 0.2s',
    '&:hover': {
      color: '#1d8a4e',
      transform: 'translateY(-2px)',
    },
  },
  helpIcon: {
    fontSize: '1.5rem',
  },
};

export default StudentLogin;