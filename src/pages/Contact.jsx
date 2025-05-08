import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// This component will be loaded at the /contact path
const Contact = () => {
  // Initialize useNavigate hook
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to handle navigation menu clicks
  const handleNavigation = (path) => {
    navigate(path); // Redirect to the specified path
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to a backend server
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const styles = {
    contactContainer: {
      fontFamily: "'Poppins', sans-serif",
      color: '#333',
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      width: '100%',
      maxWidth: '1200px',
    },
    contactInfo: {
      backgroundColor: '#f9f9f9',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
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
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    contactIcon: {
      fontSize: '1.5rem',
      color: '#1d8a4e',
      marginRight: '1rem',
    },
    contactText: {
      lineHeight: 1.6,
      color: '#555',
    },
    formContainer: {
      width: '100%',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontSize: '1rem',
      color: '#555',
      fontWeight: 500,
    },
    input: {
      padding: '0.8rem 1rem',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    },
    textarea: {
      padding: '0.8rem 1rem',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      resize: 'vertical',
      minHeight: '150px',
      transition: 'all 0.3s ease',
    },
    submitButton: {
      backgroundColor: '#1d8a4e',
      color: 'white',
      padding: '0.8rem 2rem',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      alignSelf: 'flex-start',
    },
    formSuccess: {
      backgroundColor: '#e8f5e9',
      color: '#1d8a4e',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      fontWeight: 500,
    },
    mapSection: {
      width: '100%',
      maxWidth: '1200px',
      marginTop: '4rem',
    },
    map: {
      width: '100%',
      height: '400px',
      borderRadius: '15px',
      backgroundColor: '#f1f1f1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#999',
      fontSize: '1.2rem',
      border: '1px solid #ddd',
    },
    faqSection: {
      backgroundColor: '#e8f5e9',
      padding: '4rem 5%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    faqGrid: {
      width: '100%',
      maxWidth: '1000px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    faqItem: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '1.5rem',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    },
    faqQuestion: {
      fontSize: '1.2rem',
      fontWeight: 600,
      marginBottom: '1rem',
      color: '#1d8a4e',
    },
    faqAnswer: {
      lineHeight: 1.6,
      color: '#555',
    },
  };

  return (
    <div style={styles.contactContainer}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <h1 style={styles.pageTitle}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have questions or want to learn more? We're here to help you on your educational journey.
        </p>
      </div>
      
      {/* Contact Section */}
      <div style={styles.contentSection}>
        <div style={styles.contactGrid}>
          <div style={styles.contactInfo}>
            <h2 style={styles.sectionTitle}>
              Get In Touch
              <span style={styles.titleAfter}></span>
            </h2>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📍</div>
              <p style={styles.contactText}>
                Utawal, along Gesora Road<br />
                Nairobi, Kenya 7034-0200
              </p>
            </div>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📞</div>
              <p style={styles.contactText}>+254 718 099959</p>
            </div>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>✉️</div>
              <p style={styles.contactText}>info@eujimsolutions.edu</p>
            </div>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>🕒</div>
              <div>
                <p style={styles.contactText}><strong>Office Hours:</strong></p>
                <p style={styles.contactText}>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p style={styles.contactText}>Saturday: Closed</p>
                <p style={styles.contactText}>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div style={styles.formContainer}>
            <h2 style={styles.sectionTitle}>
              Send a Message
              <span style={styles.titleAfter}></span>
            </h2>
            
            {formSubmitted && (
              <div style={styles.formSuccess}>
                Thank you for your message! We'll get back to you shortly.
              </div>
            )}
            
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Your Name</label>
                <input
                  style={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1d8a4e';
                    e.target.style.boxShadow = '0 0 0 2px rgba(29, 138, 78, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">Email Address</label>
                <input
                  style={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1d8a4e';
                    e.target.style.boxShadow = '0 0 0 2px rgba(29, 138, 78, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="subject">Subject</label>
                <input
                  style={styles.input}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this regarding?"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1d8a4e';
                    e.target.style.boxShadow = '0 0 0 2px rgba(29, 138, 78, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="message">Your Message</label>
                <textarea
                  style={styles.textarea}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Please provide details about your inquiry..."
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1d8a4e';
                    e.target.style.boxShadow = '0 0 0 2px rgba(29, 138, 78, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={styles.submitButton}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#167a40';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#1d8a4e';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div style={styles.mapSection}>
          <h2 style={styles.sectionTitle}>
            Find Us
            <span style={styles.titleAfter}></span>
          </h2>
          
          <div style={styles.map}>
            [Interactive Map Would Be Displayed Here]
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>
          Frequently Asked Questions
          <span style={styles.titleAfter}></span>
        </h2>
        
        <div style={styles.faqGrid}>
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>How do I apply for a program?</h3>
            <p style={styles.faqAnswer}>
              To apply for a program, click on the "Apply Now" button on our homepage or program page. 
              You'll need to create an account, fill out the application form, and submit any required documents. 
              Our admissions team will review your application and get back to you within 1-2 weeks.
            </p>
          </div>
          
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>Do you offer financial aid or payment plans?</h3>
            <p style={styles.faqAnswer}>
              Yes, we offer various financial assistance options including scholarships, payment plans, and income share agreements. 
              Please contact our financial aid office at financial.aid@eujimsolutions.edu for more information about your specific situation.
            </p>
          </div>
          
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>Can I visit the campus before applying?</h3>
            <p style={styles.faqAnswer}>
              Absolutely! We encourage prospective students to visit our campus. We host open houses monthly, 
              or you can schedule a personalized tour by contacting our admissions office at admissions@eujimsolutions.edu 
              or calling (555) 123-4567 ext. 101.
            </p>
          </div>
          
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>What career services do you offer to graduates?</h3>
            <p style={styles.faqAnswer}>
              Our career services include resume workshops, interview preparation, job search assistance, 
              networking events, industry partner connections, and lifetime access to our job board. 
              We're committed to helping our graduates succeed in their careers long after they complete their programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;