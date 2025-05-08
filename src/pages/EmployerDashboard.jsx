import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [sortBy, setSortBy] = useState('points');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isLoading, setIsLoading] = useState(true);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [profileData, setProfileData] = useState({
    companyName: 'Tech Innovations Inc.',
    industry: 'Software Development',
    location: 'San Francisco, CA',
    website: 'www.techinnovations.com',
    contactPerson: 'Jane Smith',
    contactEmail: 'jane.smith@techinnovations.com',
    contactPhone: '(555) 123-4567',
    companySize: '50-200 employees',
    about: 'Tech Innovations Inc. is a leading software development company specializing in cutting-edge solutions for businesses. We are constantly looking for talented individuals to join our dynamic team.'
  });

  // Mock student data for demonstration
  const [allStudents, setAllStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Generate mock student data
  useEffect(() => {
    const mockStudents = generateMockStudents(30);
    setAllStudents(mockStudents);
    setFilteredStudents(mockStudents);
    setIsLoading(false);
  }, []);

  // Filter and sort students when search query, selected skill, or sort options change
  useEffect(() => {
    let results = [...allStudents];
    
    // Filter by search query (name or ID)
    if (searchQuery) {
      results = results.filter(student => 
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by selected skill
    if (selectedSkill) {
      results = results.filter(student => 
        student.skills.some(skill => 
          skill.name.toLowerCase() === selectedSkill.toLowerCase()
        )
      );
    }
    
    // Sort results
    results.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'points') {
        comparison = a.points - b.points;
      } else if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'experience') {
        comparison = a.experience - b.experience;
      }
      
      return sortOrder === 'desc' ? -comparison : comparison;
    });
    
    setFilteredStudents(results);
  }, [searchQuery, selectedSkill, sortBy, sortOrder, allStudents]);

  // Get top 5 students by points
  const topStudents = [...allStudents]
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);

  // Handle profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    setShowProfileModal(false);
    alert('Profile updated successfully!');
  };

  // Handle shortlist confirmation
  const handleShortlistCandidates = () => {
    // In a real app, you would send the selected candidates to your backend
    setShowConfirmModal(true);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('employerToken');
    navigate('/employer-login');
  };

  // Toggle candidate selection
  const toggleCandidateSelection = (studentId) => {
    if (selectedCandidates.includes(studentId)) {
      setSelectedCandidates(selectedCandidates.filter(id => id !== studentId));
    } else {
      setSelectedCandidates([...selectedCandidates, studentId]);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>ESA</h1>
          <div style={styles.logoSubtitle}>Employer Portal</div>
        </div>
        
        <div style={styles.userMenu}>
          <button style={styles.profileButton} onClick={() => setShowProfileModal(true)}>
            Company Profile
          </button>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.welcomeSection}>
          <h2 style={styles.welcomeTitle}>Welcome, {profileData.companyName}</h2>
          <p style={styles.welcomeText}>Find and connect with top talent from our graduate pool.</p>
        </div>

        {/* Dashboard Stats */}
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>{allStudents.length}</span>
            <span style={styles.statLabel}>Available Candidates</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>{selectedCandidates.length}</span>
            <span style={styles.statLabel}>Selected for Interview</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>5</span>
            <span style={styles.statLabel}>Top Recommended</span>
          </div>
        </div>

        {/* Top Students Section */}
        <section style={styles.topStudentsSection}>
          <h3 style={styles.sectionTitle}>Top Recommended Candidates</h3>
          <div style={styles.topStudentsGrid}>
            {topStudents.map(student => (
              <div key={student.id} style={styles.topStudentCard}>
                <div style={styles.studentAvatarContainer}>
                  <div style={styles.studentAvatar}>{student.name.charAt(0)}</div>
                </div>
                <h4 style={styles.topStudentName}>{student.name}</h4>
                <p style={styles.topStudentSkills}>
                  {student.skills.slice(0, 3).map(skill => skill.name).join(', ')}
                  {student.skills.length > 3 && '...'}
                </p>
                <div style={styles.topStudentPoints}>
                  <span style={styles.pointsLabel}>Points:</span>
                  <span style={styles.pointsValue}>{student.points}</span>
                </div>
                <div style={styles.topStudentExperience}>
                  <span style={styles.experienceLabel}>Experience:</span>
                  <span style={styles.experienceValue}>{student.experience} years</span>
                </div>
                <label style={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={selectedCandidates.includes(student.id)}
                    onChange={() => toggleCandidateSelection(student.id)}
                    style={styles.checkbox}
                  />
                  <span style={styles.checkboxLabel}>Select for Interview</span>
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Search and Filter Section */}
        <section style={styles.searchSection}>
          <h3 style={styles.sectionTitle}>Find Candidates</h3>
          
          <div style={styles.filterBar}>
            <div style={styles.searchBox}>
              <input 
                type="text" 
                placeholder="Search by name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            
            <div style={styles.skillFilter}>
              <select 
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                style={styles.select}
              >
                <option value="">Filter by Skill</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="DevOps">DevOps</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            </div>
            
            <div style={styles.sortOptions}>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={styles.select}
              >
                <option value="points">Sort by: Points</option>
                <option value="name">Sort by: Name</option>
                <option value="experience">Sort by: Experience</option>
              </select>
              
              <button 
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                style={styles.sortOrderButton}
              >
                {sortOrder === 'desc' ? '↓' : '↑'}
              </button>
            </div>
          </div>
        </section>

        {/* Students List Section */}
        <section style={styles.studentsListSection}>
          <h3 style={styles.sectionTitle}>Available Candidates</h3>
          
          {isLoading ? (
            <div style={styles.loading}>Loading candidates...</div>
          ) : filteredStudents.length === 0 ? (
            <div style={styles.noResults}>No candidates match your search criteria.</div>
          ) : (
            <div style={styles.studentsTable}>
              <div style={styles.tableHeader}>
                <div style={styles.tableHeaderCell}>Select</div>
                <div style={styles.tableHeaderCell}>ID</div>
                <div style={styles.tableHeaderCell}>Name</div>
                <div style={styles.tableHeaderCell}>Skills</div>
                <div style={styles.tableHeaderCell}>Experience</div>
                <div style={styles.tableHeaderCell}>Points</div>
              </div>
              
              {filteredStudents.map(student => (
                <div key={student.id} style={styles.tableRow}>
                  <div style={styles.tableCell}>
                    <input 
                      type="checkbox"
                      checked={selectedCandidates.includes(student.id)}
                      onChange={() => toggleCandidateSelection(student.id)}
                      style={styles.tableCheckbox}
                    />
                  </div>
                  <div style={styles.tableCell}>{student.id}</div>
                  <div style={styles.tableCell}>{student.name}</div>
                  <div style={styles.tableCell}>
                    {student.skills.slice(0, 3).map(skill => skill.name).join(', ')}
                    {student.skills.length > 3 && '...'}
                  </div>
                  <div style={styles.tableCell}>{student.experience} years</div>
                  <div style={styles.tableCell}>
                    <span style={styles.pointsBadge}>{student.points}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div style={styles.actionButtonContainer}>
            <button 
              style={selectedCandidates.length > 0 ? styles.actionButton : {...styles.actionButton, ...styles.disabledButton}}
              onClick={handleShortlistCandidates}
              disabled={selectedCandidates.length === 0}
            >
              Shortlist Selected Candidates ({selectedCandidates.length})
            </button>
          </div>
        </section>
      </main>

      {/* Profile Modal */}
      {showProfileModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>Company Profile</h2>
            
            <form onSubmit={handleProfileUpdate} style={styles.profileForm}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Company Name</label>
                  <input 
                    type="text" 
                    value={profileData.companyName}
                    onChange={(e) => setProfileData({...profileData, companyName: e.target.value})}
                    style={styles.formInput}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Industry</label>
                  <input 
                    type="text" 
                    value={profileData.industry}
                    onChange={(e) => setProfileData({...profileData, industry: e.target.value})}
                    style={styles.formInput}
                  />
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Location</label>
                  <input 
                    type="text" 
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    style={styles.formInput}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Website</label>
                  <input 
                    type="text" 
                    value={profileData.website}
                    onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                    style={styles.formInput}
                  />
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Contact Person</label>
                  <input 
                    type="text" 
                    value={profileData.contactPerson}
                    onChange={(e) => setProfileData({...profileData, contactPerson: e.target.value})}
                    style={styles.formInput}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email</label>
                  <input 
                    type="email" 
                    value={profileData.contactEmail}
                    onChange={(e) => setProfileData({...profileData, contactEmail: e.target.value})}
                    style={styles.formInput}
                  />
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone</label>
                  <input 
                    type="text" 
                    value={profileData.contactPhone}
                    onChange={(e) => setProfileData({...profileData, contactPhone: e.target.value})}
                    style={styles.formInput}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Company Size</label>
                  <select 
                    value={profileData.companySize}
                    onChange={(e) => setProfileData({...profileData, companySize: e.target.value})}
                    style={styles.formInput}
                  >
                    <option value="1-10 employees">1-10 employees</option>
                    <option value="11-50 employees">11-50 employees</option>
                    <option value="50-200 employees">50-200 employees</option>
                    <option value="201-500 employees">201-500 employees</option>
                    <option value="500+ employees">500+ employees</option>
                  </select>
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>About Company</label>
                <textarea 
                  value={profileData.about}
                  onChange={(e) => setProfileData({...profileData, about: e.target.value})}
                  style={styles.formTextarea}
                  rows={4}
                />
              </div>
              
              <div style={styles.modalButtons}>
                <button type="submit" style={styles.saveButton}>Save Changes</button>
                <button 
                  type="button" 
                  onClick={() => setShowProfileModal(false)}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.confirmModalContent}>
            <h2 style={styles.modalTitle}>Confirm Shortlisting</h2>
            <p style={styles.confirmText}>
              You are about to shortlist {selectedCandidates.length} candidate(s) for an interview.
              This will send them a notification. Do you want to proceed?
            </p>
            
            <div style={styles.modalButtons}>
              <button 
                onClick={() => {
                  setShowConfirmModal(false);
                  alert('Candidates have been notified about the interview opportunity!');
                  setSelectedCandidates([]);
                }}
                style={styles.confirmButton}
              >
                Confirm
              </button>
              <button 
                onClick={() => setShowConfirmModal(false)}
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to generate mock student data
const generateMockStudents = (count) => {
  const skills = [
    'Web Development', 'Data Science', 'UI/UX Design', 'Mobile Development',
    'Cloud Computing', 'DevOps', 'Machine Learning', 'Cybersecurity',
    'Blockchain', 'IoT Development', 'Game Development', 'AR/VR Development'
  ];
  
  const firstNames = [
    'John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'James', 'Emma',
    'Robert', 'Olivia', 'William', 'Sophia', 'Joseph', 'Ava', 'Thomas', 'Isabella',
    'Daniel', 'Mia', 'Matthew', 'Charlotte', 'Ryan', 'Amelia', 'Joshua', 'Harper'
  ];
  
  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson',
    'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin',
    'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee'
  ];
  
  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const id = `STU${String(i + 1001).padStart(4, '0')}`;
    const experience = Math.floor(Math.random() * 5) + 1;
    const points = Math.floor(Math.random() * 500) + 500;
    
    // Assign 3-6 random skills to each student
    const numSkills = Math.floor(Math.random() * 4) + 3;
    const shuffledSkills = [...skills].sort(() => 0.5 - Math.random());
    const studentSkills = shuffledSkills.slice(0, numSkills).map(name => ({
      name,
      level: Math.floor(Math.random() * 5) + 1
    }));
    
    return {
      id,
      name,
      skills: studentSkills,
      experience,
      points,
      education: 'Bachelor's Degree',
      availability: 'Immediate'
    };
  });
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#f7f9fc',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: '1rem 2rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
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
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  profileButton: {
    backgroundColor: 'transparent',
    color: '#1d8a4e',
    border: '1px solid #1d8a4e',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    color: '#666',
    border: '1px solid #ddd',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },
  mainContent: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  welcomeSection: {
    marginBottom: '1rem',
  },
  welcomeTitle: {
    color: '#333',
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  welcomeText: {
    color: '#666',
    fontSize: '1rem',
  },
  statsContainer: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    flex: '1',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#1d8a4e',
    marginBottom: '0.5rem',
  },
  statLabel: {
    color: '#666',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  topStudentsSection: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginBottom: '2rem',
  },
  sectionTitle: {
    color: '#333',
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #eee',
  },
  topStudentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  topStudentCard: {
    backgroundColor: '#f9fcf9',
    borderRadius: '8px',
    padding: '1.5rem',
    border: '1px solid #e6f3ec',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  studentAvatarContainer: {
    marginBottom: '1rem',
  },
  studentAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#1d8a4e',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  topStudentName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.5rem',
  },
  topStudentSkills: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  topStudentPoints: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  pointsLabel: {
    fontSize: '0.9rem',
    color: '#666',
  },
  pointsValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1d8a4e',
  },
  topStudentExperience: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  experienceLabel: {
    fontSize: '0.9rem',
    color: '#666',
  },
  experienceValue: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '0.5rem',
    cursor: 'pointer',
  },
  checkbox: {
    accentColor: '#1d8a4e',
  },
  checkboxLabel: {
    fontSize: '0.9rem',
    color: '#666',
  },
  searchSection: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginBottom: '2rem',
  },
  filterBar: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  searchBox: {
    flex: '2',
    minWidth: '250px',
  },
  searchInput: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  skillFilter: {
    flex: '1',
    minWidth: '200px',
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    backgroundColor: 'white',
  },
  sortOptions: {
    display: 'flex',
    gap: '0.5rem',
    flex: '1',
    minWidth: '200px',
  },
  sortOrderButton: {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '0 1rem',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  studentsListSection: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  loading: {
    textAlign: 'center',
    padding: '2rem',
    color: '#666',
  },
  noResults: {
    textAlign: 'center',
    padding: '2rem',
    color: '#666',
  },
  studentsTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '0.5fr 1fr 2fr 3fr 1fr 1fr',
    padding: '1rem 0',
    borderBottom: '2px solid #eee',
    fontWeight: '600',
    color: '#333',
  },
  tableHeaderCell: {
    padding: '0 0.5rem',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '0.5fr 1fr 2fr 3fr 1fr 1fr',
    padding: '1rem 0',
    borderBottom: '1px solid #eee',
    alignItems: 'center',
  },
  tableCell: {
    padding: '0 0.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tableCheckbox: {
    accentColor: '#1d8a4e',
  },
  pointsBadge: {
    backgroundColor: '#e6f3ec',
    color: '#1d8a4e',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  actionButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  actionButton: {
    backgroundColor: '#1d8a4e',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
    opacity: 0.7,
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '2rem',
    width: '80%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflow: 'auto',
  },
  confirmModalContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '2rem',
    width: '90%',
    maxWidth: '500px',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #eee',
  },
  profileForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formRow: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  formGroup: {
    flex: '1',
    minWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  formLabel: {
    color: '#666',
    fontSize: '0.9rem',
  },
  formInput: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  formTextarea: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  saveButton: {
    backgroundColor: '#1d8a4e',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
  },
  confirmButton: {
    backgroundColor: '#1d8a4e',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    color: '#666',
    border: '1px solid #ddd',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
  },
  confirmText: {
    marginBottom: '1.5rem',
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.6',
  },
};

export default EmployerDashboard;