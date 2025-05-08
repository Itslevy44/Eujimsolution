import React, { useState } from 'react';

const AdminAddStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    graduationYear: '',
    phoneNumber: '',
    address: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Here you'd make an actual API call to create a new student in your backend
      console.log('New student added:', formData);

      // Show success message
      setSuccessMessage('Student added successfully!');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        course: '',
        graduationYear: '',
        phoneNumber: '',
        address: '',
      });

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error adding student:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Available courses
  const availableCourses = [
    'Web Development',
    'Data Science',
    'Mobile App Development',
    'UI/UX Design',
    'Cybersecurity',
    'Network Engineering'
  ];

  // Current year for graduation year dropdown
  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from({ length: 6 }, (_, i) => currentYear + i);

  return (
    <div className="admin-add-student">
      <div className="card">
        <div className="card-header">
          <h2>Add New Student</h2>
          <p>Enter student details to register them in the system</p>
        </div>

        {successMessage && (
          <div className="success-message">
            <span>✅</span> {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter student's full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter student's email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter student's phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
              >
                <option value="" disabled>Select a course</option>
                {availableCourses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="graduationYear">Expected Graduation Year</label>
              <select
                id="graduationYear"
                name="graduationYear"
                required
                value={formData.graduationYear}
                onChange={handleChange}
              >
                <option value="" disabled>Select year</option>
                {graduationYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter student's address"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary">
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding...' : 'Add Student'}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .admin-add-student {
          padding: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          overflow: hidden;
        }

        .card-header {
          background: linear-gradient(135deg, #1d8a4e 0%, #0e5d34 100%);
          color: white;
          padding: 1.5rem 2rem;
        }

        .card-header h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.8rem;
          font-weight: 600;
        }

        .card-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 1rem;
        }

        form {
          padding: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          margin-bottom: 0.5rem;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #333;
        }

        input, select, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #1d8a4e;
          box-shadow: 0 0 0 3px rgba(29, 138, 78, 0.15);
        }

        select {
          background-color: white;
          cursor: pointer;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
        }

        .btn-primary, .btn-secondary {
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-primary {
          background-color: #1d8a4e;
          color: white;
        }

        .btn-primary:hover {
          background-color: #0e5d34;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(29, 138, 78, 0.2);
        }

        .btn-primary:disabled {
          background-color: #8fcba9;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .btn-secondary {
          background-color: #f3f4f6;
          color: #374151;
        }

        .btn-secondary:hover {
          background-color: #e5e7eb;
          transform: translateY(-2px);
        }

        .success-message {
          background-color: #e8f5e9;
          border-left: 4px solid #1d8a4e;
          color: #1d8a4e;
          padding: 1rem 2rem;
          margin: 1rem 2rem 0;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .form-actions {
            flex-direction: column-reverse;
          }
          
          .btn-primary, .btn-secondary {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminAddStudent;