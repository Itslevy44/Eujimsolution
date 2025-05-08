import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerLogin = () => {
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
      
      // Authentication logic
      if (email && password) {
        console.log("Authentication successful, setting tokens and redirecting...");
        
        // Set various auth tokens that might be needed by PrivateRoute
        localStorage.setItem('employerToken', 'mock-employer-token');
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'employer');
        
        // Use a timeout to ensure tokens are set before navigation
        setTimeout(() => {
          // Try different variations of the route path
          console.log("Navigating to employer dashboard...");
          navigate('/employer-dashboard');
          
          // Alternative approach if the above doesn't work:
          // window.location.href = '/employer-dashboard';
        }, 100);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginSection}>
        <div style={styles.loginCard}>
          <div style={styles.logoContainer}>
            <h1 style={styles.logo}>ESA</h1>
            <div style={styles.logoSubtitle}>Employer Portal</div>
          </div>
          
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>Access your talent pipeline and connect with our graduates</p>
          
          {error && <div style={styles.errorMessage}>{error}</div>}
          
          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="employer@company.com" 
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
            </div>
            
            <div style={styles.formOptions}>
              <div style={styles.checkboxGroup}>
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  style={styles.checkbox} 
                />
                <label htmlFor="rememberMe" style={styles.checkboxLabel}>Remember me</label>
              </div>
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
          
          <div style={styles.divider}>
            <span style={styles.dividerText}>Don't have an account?</span>
          </div>
          
          <button 
            style={styles.secondaryButton}
            onClick={() => navigate('/employer-registration')}
          >
            Register as Employer
          </button>
          
          <div style={styles.helpText}>
            Not an employer? <a href="/" style={styles.link}>Return to home</a>
          </div>
        </div>
      </div>
      
      <div style={styles.infoSection}>
        <div style={styles.infoContent}>
          <h3 style={styles.infoTitle}>Find Your Next Star Employee</h3>
          <p style={styles.infoText}>
            Access our exclusive talent pool of qualified graduates with cutting-edge skills
            and ready to make an immediate impact at your company.
          </p>
          
          <div style={styles.benefitsList}>
            <div style={styles.benefitItem}>
              <div style={styles.benefitIcon}>✓</div>
              <div>
                <h4 style={styles.benefitTitle}>Pre-screened Talent</h4>
                <p style={styles.benefitText}>All graduates have completed rigorous training and assessments</p>
              </div>
            </div>
            
            <div style={styles.benefitItem}>
              <div style={styles.benefitIcon}>✓</div>
              <div>
                <h4 style={styles.benefitTitle}>Direct Communication</h4>
                <p style={styles.benefitText}>Connect directly with candidates that match your requirements</p>
              </div>
            </div>
            
            <div style={styles.benefitItem}>
              <div style={styles.benefitIcon}>✓</div>
              <div>
                <h4 style={styles.benefitTitle}>Dedicated Support</h4>
                <p style={styles.benefitText}>Our team helps you throughout the entire hiring process</p>
              </div>
            </div>
          </div>
          
          <div style={styles.testimonial}>
            <p style={styles.testimonialText}>
              "Eujim Solutions Academy has consistently provided us with exceptional talent that has contributed significantly to our projects."
            </p>
            <p style={styles.testimonialAuthor}>- HR Director, Tech Innovations Inc.</p>
          </div>
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
  loginSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  loginCard: {
    width: '100%',
    maxWidth: '450px',
    padding: '2.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
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
    fontSize: '0.95rem',
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
    '&:focus': {
      borderColor: '#1d8a4e',
      boxShadow: '0 0 0 2px rgba(29, 138, 78, 0.2)',
    },
  },
  formOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.85rem',
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '0.5rem',
    accentColor: '#1d8a4e',
  },
  checkboxLabel: {
    color: '#555',
    cursor: 'pointer',
  },
  forgotPassword: {
    color: '#1d8a4e', 
    cursor: 'pointer',
    fontWeight: '500',
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
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#1d8a4e',
    padding: '0.75rem',
    border: '1px solid #1d8a4e',
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
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '1.5rem 0',
    color: '#999',
    fontSize: '0.9rem',
    '&::before, &::after': {
      content: '""',
      flex: '1',
      borderBottom: '1px solid #ddd',
    },
  },
  dividerText: {
    padding: '0 1rem',
  },
  helpText: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '1.5rem',
  },
  link: {
    color: '#1d8a4e',
    textDecoration: 'none',
    fontWeight: '500',
  },
  infoSection: {
    flex: '1',
    backgroundColor: '#1d8a4e',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    position: 'relative',
    backgroundImage: 'linear-gradient(135deg, rgba(29, 138, 78, 1) 0%, rgba(29, 138, 78, 0.8) 100%)',
  },
  infoContent: {
    maxWidth: '500px',
    padding: '2rem',
  },
  infoTitle: {
    fontSize: '2.2rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  infoText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    opacity: '0.9',
  },
  benefitsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2.5rem',
  },
  benefitItem: {
    display: 'flex',
    gap: '1rem',
  },
  benefitIcon: {
    width: '28px',
    height: '28px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  benefitTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  benefitText: {
    fontSize: '0.9rem',
    opacity: '0.8',
  },
  testimonial: {
    padding: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    marginTop: '1rem',
  },
  testimonialText: {
    fontSize: '1rem',
    fontStyle: 'italic',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
  testimonialAuthor: {
    fontWeight: '600',
    fontSize: '0.9rem',
  },
};

export default EmployerLogin;