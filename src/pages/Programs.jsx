import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// This component will be loaded at the /programs path
const Programs = () => {
  // Initialize useNavigate hook
  const navigate = useNavigate();

  // State for current filter
  const [currentFilter, setCurrentFilter] = useState('all');

  // Function to handle navigation menu clicks
  const handleNavigation = (path) => {
    navigate(path); // Redirect to the specified path
  };

  // Program data
  const programs = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      category: 'software',
      duration: '16 weeks',
      level: 'Intermediate',
      format: 'Full-time',
      description: 'Become a proficient full-stack developer capable of building modern web applications. Learn front-end technologies like React and back-end systems with Node.js and databases.',
      highlights: [
        'JavaScript fundamentals and advanced concepts',
        'React and modern front-end development',
        'Node.js, Express, and RESTful APIs',
        'SQL and NoSQL databases',
        'Authentication, security, and deployment'
      ],
      icon: '💻'
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      category: 'data',
      duration: '12 weeks',
      level: 'Intermediate',
      format: 'Full-time',
      description: 'Master data analysis, visualization, and machine learning techniques to extract valuable insights from complex datasets and drive data-informed decision making.',
      highlights: [
        'Python for data analysis with pandas and NumPy',
        'Data visualization with matplotlib and seaborn',
        'Statistical analysis and hypothesis testing',
        'Machine learning with scikit-learn',
        'Data storytelling and business applications'
      ],
      icon: '📊'
    },
    {
      id: 3,
      title: 'UX/UI Design',
      category: 'design',
      duration: '10 weeks',
      level: 'Beginner',
      format: 'Part-time',
      description: 'Learn to create beautiful, functional user interfaces and experiences. Develop skills in user research, wireframing, prototyping, and usability testing.',
      highlights: [
        'Design thinking and user-centered methodologies',
        'User research and persona development',
        'Wireframing and information architecture',
        'High-fidelity prototyping with Figma',
        'Design systems and component libraries'
      ],
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      category: 'security',
      duration: '14 weeks',
      level: 'Intermediate',
      format: 'Full-time',
      description: 'Gain essential skills to protect systems and networks from cyber threats. Learn security principles, common attack vectors, and defense strategies.',
      highlights: [
        'Network security fundamentals',
        'Threat detection and prevention',
        'Security auditing and penetration testing',
        'Incident response and recovery',
        'Security compliance and best practices'
      ],
      icon: '🔒'
    },
    {
      id: 5,
      title: 'Cloud Computing & DevOps',
      category: 'cloud',
      duration: '8 weeks',
      level: 'Advanced',
      format: 'Part-time',
      description: 'Master cloud platforms and DevOps practices to build, deploy, and manage scalable applications with modern continuous integration and deployment pipelines.',
      highlights: [
        'AWS and Azure fundamentals',
        'Infrastructure as Code with Terraform',
        'Containerization with Docker and Kubernetes',
        'CI/CD pipelines and automation',
        'Cloud security and cost optimization'
      ],
      icon: '☁️'
    },
    {
      id: 6,
      title: 'Mobile App Development',
      category: 'software',
      duration: '12 weeks',
      level: 'Intermediate',
      format: 'Full-time',
      description: 'Build native and cross-platform mobile applications for iOS and Android using React Native and related technologies.',
      highlights: [
        'React Native fundamentals',
        'Native device features and APIs',
        'State management with Redux',
        'App publishing and distribution',
        'Performance optimization for mobile'
      ],
      icon: '📱'
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "The Full-Stack Web Development program completely transformed my career. I went from knowing basic HTML to building complete web applications in just a few months.",
      author: "Sarah Johnson",
      role: "Junior Web Developer",
      program: "Full-Stack Web Development"
    },
    {
      id: 2,
      text: "The instructors in the Data Science program were exceptional. They made complex concepts easy to understand and were always available to provide extra help when needed.",
      author: "Michael Chen",
      role: "Data Analyst",
      program: "Data Science & Analytics"
    },
    {
      id: 3,
      text: "Learning UX/UI design was one of the best decisions I've made. The hands-on projects helped me build a portfolio that impressed employers right away.",
      author: "Emma Rodriguez",
      role: "UX Designer",
      program: "UX/UI Design"
    }
  ];

  // Filter programs based on current filter
  const filteredPrograms = currentFilter === 'all' 
    ? programs 
    : programs.filter(program => program.category === currentFilter);

  const styles = {
    programsContainer: {
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
    filterSection: {
      padding: '2rem 5%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '1px solid #eee',
    },
    filterContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    filterButton: {
      padding: '0.6rem 1.5rem',
      borderRadius: '30px',
      border: '1px solid #ddd',
      backgroundColor: 'white',
      fontSize: '0.9rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    activeFilterButton: {
      padding: '0.6rem 1.5rem',
      borderRadius: '30px',
      border: '1px solid #1d8a4e',
      backgroundColor: '#1d8a4e',
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    programsSection: {
      padding: '4rem 5%',
      backgroundColor: '#f9f9f9',
    },
    programsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    programCard: {
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    },
    programHeader: {
      backgroundColor: '#1d8a4e',
      color: 'white',
      padding: '1.5rem',
      position: 'relative',
    },
    programIcon: {
      position: 'absolute',
      top: '1.5rem',
      right: '1.5rem',
      fontSize: '2rem',
    },
    programTitle: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    programMeta: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginTop: '1rem',
    },
    programMetaItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 500,
    },
    programBody: {
      padding: '1.5rem',
    },
    programDescription: {
      lineHeight: 1.6,
      color: '#555',
      marginBottom: '1.5rem',
    },
    programHighlights: {
      marginBottom: '1.5rem',
    },
    highlightTitle: {
      fontSize: '1.1rem',
      fontWeight: 600,
      marginBottom: '0.8rem',
      color: '#333',
    },
    highlightList: {
      paddingLeft: '1.5rem',
      color: '#555',
    },
    highlightItem: {
      marginBottom: '0.5rem',
      lineHeight: 1.5,
    },
    programFooter: {
      padding: '1.5rem',
      borderTop: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    learnMoreButton: {
      backgroundColor: '#1d8a4e',
      color: 'white',
      padding: '0.6rem 1.5rem',
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: 500,
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.3s ease',
    },
    applyButton: {
      backgroundColor: 'white',
      color: '#1d8a4e',
      padding: '0.6rem 1.5rem',
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: 500,
      cursor: 'pointer',
      border: '1px solid #1d8a4e',
      transition: 'all 0.3s ease',
    },
    testimonialsSection: {
      padding: '4rem 5%',
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#1d8a4e',
      marginBottom: '2rem',
      position: 'relative',
      textAlign: 'center',
    },
    titleAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      backgroundColor: '#4caf50',
      borderRadius: '2px',
      display: 'block',
    },
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    testimonialCard: {
      backgroundColor: '#f9f9f9',
      padding: '2rem',
      borderRadius: '10px',
      position: 'relative',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    },
    testimonialText: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#555',
      marginBottom: '1.5rem',
      fontStyle: 'italic',
    },
    testimonialAuthor: {
      borderTop: '1px solid #eee',
      paddingTop: '1rem',
    },
    authorName: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#333',
      marginBottom: '0.25rem',
    },
    authorRole: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '0.25rem',
    },
    authorProgram: {
      fontSize: '0.8rem',
      color: '#1d8a4e',
      fontWeight: 500,
    }
  };

  return (
    <div style={styles.programsContainer}>
      {/* Navigation bar is provided by the parent layout component */}

      {/* Header Section */}
      <div style={styles.headerSection}>
        <h1 style={styles.pageTitle}>Our Programs</h1>
        <p style={styles.subtitle}>
          Explore our cutting-edge tech education programs designed to equip you with the skills 
          needed in today's digital economy. Choose from a variety of specializations tailored to 
          match industry demands.
        </p>
      </div>

      {/* Filter Section */}
      <div style={styles.filterSection}>
        <div style={styles.filterContainer}>
          <button 
            style={currentFilter === 'all' ? styles.activeFilterButton : styles.filterButton}
            onClick={() => setCurrentFilter('all')}
          >
            All Programs
          </button>
          <button 
            style={currentFilter === 'software' ? styles.activeFilterButton : styles.filterButton}
            onClick={() => setCurrentFilter('software')}
          >
            Software Development
          </button>
          <button 
            style={currentFilter === 'data' ? styles.activeFilterButton : styles.filterButton}
            onClick={() => setCurrentFilter('data')}
          >
            Data Science
          </button>
          <button 
            style={currentFilter === 'design' ? styles.activeFilterButton : styles.filterButton}
            onClick={() => setCurrentFilter('design')}
          >
            Design
          </button>
          <button 
            style={currentFilter === 'security' ? styles.activeFilterButton : styles.filterButton}
            onClick={() => setCurrentFilter('security')}
          >
            Cybersecurity
          </button>
          <button 
            style={currentFilter === 'cloud' ? styles.activeFilterButton : styles.filterButton}
            onClick={() => setCurrentFilter('cloud')}
          >
            Cloud Computing
          </button>
        </div>
      </div>

      {/* Programs Section */}
      <div style={styles.programsSection}>
        <div style={styles.programsGrid}>
          {filteredPrograms.map((program) => (
            <div key={program.id} style={styles.programCard}>
              <div style={styles.programHeader}>
                <div style={styles.programIcon}>{program.icon}</div>
                <h3 style={styles.programTitle}>{program.title}</h3>
                <div style={styles.programMeta}>
                  <span style={styles.programMetaItem}>{program.duration}</span>
                  <span style={styles.programMetaItem}>{program.level}</span>
                  <span style={styles.programMetaItem}>{program.format}</span>
                </div>
              </div>
              <div style={styles.programBody}>
                <p style={styles.programDescription}>{program.description}</p>
                <div style={styles.programHighlights}>
                  <h4 style={styles.highlightTitle}>Program Highlights:</h4>
                  <ul style={styles.highlightList}>
                    {program.highlights.map((highlight, index) => (
                      <li key={index} style={styles.highlightItem}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={styles.programFooter}>
                <button style={styles.learnMoreButton}>Learn More</button>
                <button style={styles.applyButton}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>
          Student Testimonials
          <span style={styles.titleAfter}></span>
        </h2>
        <div style={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={styles.testimonialCard}>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <div style={styles.testimonialAuthor}>
                <h4 style={styles.authorName}>{testimonial.author}</h4>
                <p style={styles.authorRole}>{testimonial.role}</p>
                <p style={styles.authorProgram}>{testimonial.program}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;