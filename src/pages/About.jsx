import React from 'react';

// This component will be loaded at the /aboutus path
const About = () => {

  const styles = {
    aboutContainer: {
      fontFamily: "'Poppins', sans-serif",
      color: '#333',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5%',
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      color: '#1d8a4e',
      fontWeight: 700,
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
    },
    navLink: {
      color: '#333',
      textDecoration: 'none',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    activeNavLink: {
      color: '#1d8a4e',
      textDecoration: 'none',
      fontWeight: 500,
      cursor: 'pointer',
    },
    headerSection: {
      background: 'linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%)',
      padding: '4rem 5%',
      textAlign: 'center',
    },
    pageTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1d8a4e',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.2rem',
      maxWidth: '800px',
      margin: '0 auto',
      color: '#555',
    },
    contentSection: {
      padding: '4rem 5%',
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#1d8a4e',
      marginBottom: '2rem',
      position: 'relative',
    },
    titleAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: 0,
      width: '60px',
      height: '4px',
      backgroundColor: '#4caf50',
      borderRadius: '2px',
      display: 'block',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      marginTop: '3rem',
    },
    infoCard: {
      backgroundColor: '#f9f9f9',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    },
    infoIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#1d8a4e',
    },
    infoTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#333',
    },
    infoText: {
      lineHeight: 1.6,
      color: '#555',
    },
    teamSection: {
      padding: '4rem 5%',
      backgroundColor: '#e8f5e9',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    teamCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    teamImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundColor: '#e8f5e9',
      margin: '0 auto 1.5rem',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    teamName: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#1d8a4e',
    },
    teamRole: {
      color: '#555',
      marginBottom: '1rem',
    },
    ctaSection: {
      padding: '4rem 5%',
      backgroundColor: '#1d8a4e',
      color: 'white',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '2.2rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
    },
    ctaText: {
      fontSize: '1.2rem',
      maxWidth: '800px',
      margin: '0 auto 2rem',
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#1d8a4e',
      padding: '0.8rem 2.5rem',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.aboutContainer}>
      
      {/* Header Section */}
      <div style={styles.headerSection}>
        <h1 style={styles.pageTitle}>About Eujim Solutions Academy</h1>
        <p style={styles.subtitle}>
          Empowering the next generation of tech professionals through quality education and industry connections.
        </p>
      </div>
      
      {/* Our Story Section */}
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>
          Our Story
          <span style={styles.titleAfter}></span>
        </h2>
        
        <p style={{lineHeight: 1.8, maxWidth: '1000px', marginBottom: '2rem'}}>
          Eujim Solutions Academy was founded in 2019 with a mission to bridge the gap between education and industry needs. 
          Our founder, recognizing the disconnect between traditional education and rapidly evolving industry requirements, 
          established an academy that focuses on practical, hands-on learning and direct industry connections.
        </p>
        
        <p style={{lineHeight: 1.8, maxWidth: '1000px'}}>
          Today, we have grown into a leading tech education provider with hundreds of successful graduates working in top 
          companies across the country. Our commitment to quality education, practical skill development, and career support 
          remains at the core of everything we do.
        </p>
        
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <div style={styles.infoIcon}>🎯</div>
            <h3 style={styles.infoTitle}>Our Mission</h3>
            <p style={styles.infoText}>
              To provide industry-relevant education that empowers students to excel in their careers while meeting the needs of employers seeking qualified talent.
            </p>
          </div>
          
          <div style={styles.infoCard}>
            <div style={styles.infoIcon}>👁️</div>
            <h3 style={styles.infoTitle}>Our Vision</h3>
            <p style={styles.infoText}>
              To be the premier academy that transforms passionate learners into industry-ready professionals through innovative education and meaningful industry connections.
            </p>
          </div>
          
          <div style={styles.infoCard}>
            <div style={styles.infoIcon}>💎</div>
            <h3 style={styles.infoTitle}>Our Values</h3>
            <p style={styles.infoText}>
              Excellence, Innovation, Integrity, Collaboration, and Student Success drive everything we do at Eujim Solutions Academy.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Team Section */}
      <div style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>
          Our Leadership Team
          <span style={styles.titleAfter}></span>
        </h2>
        
        <div style={styles.teamGrid}>
          <div 
            style={styles.teamCard}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
            }}
          >
            <div style={styles.teamImage}>
              <div style={{
                fontSize: '3rem',
                color: '#1d8a4e'
              }}>👨‍💼</div>
            </div>
            <h3 style={styles.teamName}>Mike Ombwayo</h3>
            <p style={styles.teamRole}>Founder & CEO</p>
            <p style={{fontSize: '0.9rem', color: '#666'}}>
              15+ years of industry experience with a passion for education and workforce development.
            </p>
          </div>
          
          <div 
            style={styles.teamCard}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
            }}
          >
            <div style={styles.teamImage}>
              <div style={{
                fontSize: '3rem',
                color: '#1d8a4e'
              }}>👩‍💼</div>
            </div>
            <h3 style={styles.teamName}>-------</h3>
            <p style={styles.teamRole}>Senoir Developer</p>
            <p style={{fontSize: '0.9rem', color: '#666'}}>
              PhD in Computer Science with extensive experience in curriculum development and experience in programming.
            </p>
          </div>
          
          <div 
            style={styles.teamCard}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
            }}
          >
            <div style={styles.teamImage}>
              <div style={{
                fontSize: '3rem',
                color: '#1d8a4e'
              }}>👨‍💼</div>
            </div>
            <h3 style={styles.teamName}>------</h3>
            <p style={styles.teamRole}>Digital Marketing</p>
            <p style={{fontSize: '0.9rem', color: '#666'}}>
              Experience in digital marketing and deep connections in the tech industry and a talent for matching graduates with employers.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Start Your Journey?</h2>
        <p style={styles.ctaText}>
          Join our community of learners and take the first step toward a successful career in tech.
        </p>
        <button 
          style={styles.ctaButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f5f5f5';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default About;