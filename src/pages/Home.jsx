import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Initialize useNavigate hook
  const navigate = useNavigate();

  // Function to handle student login button click
  const handleStudentLogin = () => {
    navigate('/studentlogin'); // Redirect to the student login page
  };

  // Function to handle find talent button click
  const handleFindTalent = () => {
    navigate('/employerlogin'); // Redirect to the employer login page
  };

  const styles = {
    homeContainer: {
      fontFamily: "'Poppins', sans-serif",
      color: '#333',
    },
    heroSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%)',
      padding: '2rem 5%',
    },
    heroContent: {
      maxWidth: '600px',
    },
    mainHeading: {
      fontSize: '3rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#333',
    },
    highlight: {
      color: '#1d8a4e',
    },
    tagline: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#555',
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem',
    },
    primaryBtn: {
      backgroundColor: '#1d8a4e',
      color: 'white',
      padding: '0.8rem 2rem',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    secondaryBtn: {
      backgroundColor: 'transparent',
      color: '#1d8a4e',
      padding: '0.8rem 2rem',
      border: '2px solid #1d8a4e',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    heroImage: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagePlaceholder: {
      width: '100%',
      maxWidth: '500px',
      height: '400px',
      backgroundColor: 'rgba(29, 138, 78, 0.1)',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    featuresSection: {
      padding: '5rem 5%',
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      color: '#1d8a4e',
      textAlign: 'center',
      marginBottom: '3rem',
      position: 'relative',
    },
    titleAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      backgroundColor: '#4caf50',
      borderRadius: '2px',
      display: 'block',
      marginTop: '15px',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    featureCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      borderBottom: '4px solid transparent',
    },
    featureIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    featureTitle: {
      color: '#1d8a4e',
      marginBottom: '1rem',
    },
    testimonialSection: {
      padding: '5rem 5%',
      backgroundColor: '#e8f5e9',
    },
    testimonialCard: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
    },
    testimonialText: {
      fontSize: '1.2rem',
      fontStyle: 'italic',
      lineHeight: 1.6,
      marginBottom: '1rem',
    },
    testimonialAuthor: {
      fontWeight: 600,
      color: '#1d8a4e',
    },
    responsiveHero: {
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        textAlign: 'center',
      }
    },
    responsiveButtons: {
      '@media (max-width: 768px)': {
        justifyContent: 'center',
      }
    }
  };

  return (
    <div style={styles.homeContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.mainHeading}>
            Welcome to <span style={styles.highlight}>Eujim Solutions Academy</span>
          </h1>
          <p style={styles.tagline}>
            Connecting our top graduates with trusted employers.
          </p>
          <div style={styles.ctaButtons}>
            <button 
              style={styles.primaryBtn}
              onClick={handleFindTalent}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#0e5d34';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#1d8a4e';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Find Talent
            </button>
            <button 
              style={styles.secondaryBtn}
              onClick={handleStudentLogin}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#e8f5e9';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Join as Student
            </button>
          </div>
        </div>
        
        <div style={styles.heroImage}>
          <div style={styles.imagePlaceholder}>
            {/* You can replace this with an actual image */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(29, 138, 78, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
              zIndex: 1,
            }}></div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>
          Why Choose Us
          <span style={styles.titleAfter}></span>
        </h2>
        
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.borderBottom = '4px solid #1d8a4e';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.borderBottom = '4px solid transparent';
            }}
          >
            <div style={styles.featureIcon}>🎓</div>
            <h3 style={styles.featureTitle}>Quality Education</h3>
            <p>Industry-relevant curriculum developed by experts</p>
          </div>
          
          <div style={styles.featureCard}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.borderBottom = '4px solid #1d8a4e';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.borderBottom = '4px solid transparent';
            }}
          >
            <div style={styles.featureIcon}>💼</div>
            <h3 style={styles.featureTitle}>Career Support</h3>
            <p>Direct connections with top employers in the industry</p>
          </div>
          
          <div style={styles.featureCard}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.borderBottom = '4px solid #1d8a4e';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.borderBottom = '4px solid transparent';
            }}
          >
            <div style={styles.featureIcon}>🚀</div>
            <h3 style={styles.featureTitle}>Skill Development</h3>
            <p>Hands-on projects and practical learning experiences</p>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div style={styles.testimonialSection}>
        <h2 style={styles.sectionTitle}>
          Success Stories
          <span style={styles.titleAfter}></span>
        </h2>
        
        <div style={styles.testimonialCard}>
          <p style={styles.testimonialText}>
            "Eujim Solutions Academy transformed my career path completely. The skills I learned helped me land my dream job!"
          </p>
          <p style={styles.testimonialAuthor}>- Recent Graduate</p>
        </div>
      </div>
    </div>
  );
};

export default Home;