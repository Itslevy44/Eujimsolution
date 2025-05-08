import React, { useState } from 'react';
import { Check, AlertCircle, Upload, Building, Mail, Calendar, MapPin, Phone, User, FileText } from 'lucide-react';

const EmployerRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    email: '',
    phone: '',
    foundedYear: '',
    companySize: '',
    address: '',
    website: '',
    
    // Contact Person
    contactName: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: '',
    
    // Required Documents
    businessCertificate: null,
    taxCertificate: null,
    identificationDoc: null,
    additionalDoc: null
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const companySizeOptions = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];
  
  const validateStep = (currentStep) => {
    const errors = {};
    
    if (currentStep === 1) {
      if (!formData.companyName.trim()) errors.companyName = "Company name is required";
      if (!formData.email.trim()) errors.email = "Email is required";
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Please enter a valid email";
      if (!formData.phone.trim()) errors.phone = "Phone number is required";
      if (!formData.address.trim()) errors.address = "Address is required";
    } else if (currentStep === 2) {
      if (!formData.contactName.trim()) errors.contactName = "Contact name is required";
      if (!formData.contactEmail.trim()) errors.contactEmail = "Contact email is required";
      if (formData.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) errors.contactEmail = "Please enter a valid email";
      if (!formData.contactPhone.trim()) errors.contactPhone = "Contact phone is required";
    } else if (currentStep === 3) {
      if (!formData.businessCertificate) errors.businessCertificate = "Business certificate is required";
      if (!formData.taxCertificate) errors.taxCertificate = "Tax certificate is required";
      if (!formData.identificationDoc) errors.identificationDoc = "Identification document is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      // Validate file type and size
      const file = files[0];
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        setFormErrors({
          ...formErrors,
          [name]: "Please upload PDF, JPEG, or PNG files only"
        });
        return;
      }
      
      if (file.size > maxSize) {
        setFormErrors({
          ...formErrors,
          [name]: "File size should not exceed 5MB"
        });
        return;
      }
      
      setFormData({ ...formData, [name]: file });
      
      // Clear error for this field
      if (formErrors[name]) {
        setFormErrors({ ...formErrors, [name]: '' });
      }
    }
  };
  
  const handleSubmit = async () => {
    if (validateStep(step)) {
      setSubmitting(true);
      
      try {
        // Here you would make your API call to register the employer
        console.log('Employer registered:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubmitted(true);
      } catch (error) {
        console.error('Registration error:', error);
        setFormErrors({
          ...formErrors,
          form: "An error occurred during submission. Please try again."
        });
      } finally {
        setSubmitting(false);
      }
    }
  };
  
  const styles = {
    container: {
      maxWidth: '64rem',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    header: {
      marginBottom: '2rem'
    },
    headerTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    headerText: {
      color: '#4b5563'
    },
    progressBarContainer: {
      width: '100%',
      marginBottom: '2rem'
    },
    progressStepsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    },
    progressStep: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    progressStepCircle: (isActive, isCompleted) => ({
      width: '2rem',
      height: '2rem',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isCompleted ? '#10b981' : isActive ? '#3b82f6' : '#d1d5db',
      color: 'white',
      fontWeight: '500'
    }),
    progressStepText: (isActive) => ({
      fontSize: '0.75rem',
      marginTop: '0.25rem',
      fontWeight: isActive ? '500' : 'normal'
    }),
    progressBar: {
      width: '100%',
      backgroundColor: '#e5e7eb',
      height: '0.5rem',
      borderRadius: '9999px'
    },
    progressBarFill: (progress) => ({
      backgroundColor: '#3b82f6',
      height: '0.5rem',
      borderRadius: '9999px',
      transition: 'width 0.3s ease',
      width: `${progress}%`
    }),
    contentContainer: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '0.5rem'
    },
    sectionTitle: {
      fontWeight: '500',
      fontSize: '1.125rem',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center'
    },
    sectionTitleIcon: {
      marginRight: '0.5rem'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1rem'
    },
    formGridDesktop: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    },
    fullWidth: {
      gridColumn: 'span 2'
    },
    formLabel: {
      display: 'block',
      color: '#374151',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '0.25rem'
    },
    formInput: (hasError) => ({
      width: '100%',
      padding: '0.5rem',
      border: `1px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
      borderRadius: '0.5rem'
    }),
    inputWithIcon: {
      position: 'relative'
    },
    inputIcon: {
      color: '#9ca3af',
      position: 'absolute',
      left: '0.75rem',
      top: '0.75rem'
    },
    inputWithIconPadding: (hasError) => ({
      width: '100%',
      padding: '0.5rem',
      paddingLeft: '2.5rem',
      border: `1px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
      borderRadius: '0.5rem'
    }),
    errorText: {
      color: '#ef4444',
      fontSize: '0.75rem',
      marginTop: '0.25rem'
    },
    helpText: {
      fontSize: '0.75rem',
      color: '#6b7280',
      marginTop: '0.25rem'
    },
    dropZone: (isSuccess, isError) => ({
      border: '2px dashed',
      borderColor: isSuccess ? '#10b981' : isError ? '#ef4444' : '#d1d5db',
      backgroundColor: isSuccess ? '#ecfdf5' : isError ? '#fef2f2' : 'transparent',
      borderRadius: '0.5rem',
      padding: '1rem',
      position: 'relative'
    }),
    dropZoneContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    fileInput: {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      opacity: '0',
      cursor: 'pointer'
    },
    uploadIcon: {
      color: '#9ca3af',
      marginBottom: '0.5rem'
    },
    dropZoneText: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.5rem'
    },
    dropZoneSubText: {
      fontSize: '0.75rem',
      color: '#9ca3af'
    },
    filePreview: {
      display: 'flex',
      alignItems: 'center'
    },
    filePreviewIcon: {
      color: '#10b981',
      marginRight: '0.5rem'
    },
    filePreviewText: {
      fontSize: '0.875rem',
      color: '#374151'
    },
    buttonContainer: {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'space-between'
    },
    buttonPrevious: {
      padding: '0.5rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      color: '#374151',
      transition: 'background-color 0.2s ease'
    },
    buttonPreviousHover: {
      backgroundColor: '#f9fafb'
    },
    buttonNext: {
      marginLeft: 'auto',
      padding: '0.5rem 1.5rem',
      backgroundColor: '#3b82f6',
      color: 'white', 
      borderRadius: '0.5rem',
      transition: 'background-color 0.2s ease'
    },
    buttonNextHover: {
      backgroundColor: '#2563eb'
    },
    buttonDisabled: {
      backgroundColor: '#93c5fd',
      cursor: 'not-allowed'
    },
    loadingIcon: {
      animation: 'spin 1s linear infinite',
      marginLeft: '-0.25rem',
      marginRight: '0.5rem',
      height: '1rem',
      width: '1rem',
      color: 'white'
    },
    loadingText: {
      display: 'flex',
      alignItems: 'center'
    },
    disclaimerContainer: {
      marginTop: '1.5rem',
      fontSize: '0.75rem',
      color: '#6b7280',
      display: 'flex',
      alignItems: 'flex-start'
    },
    disclaimerIcon: {
      marginRight: '0.5rem',
      marginTop: '0.125rem',
      flexShrink: '0'
    },
    successContainer: {
      textAlign: 'center',
      paddingTop: '3rem',
      paddingBottom: '3rem'
    },
    successIconContainer: {
      width: '4rem',
      height: '4rem',
      backgroundColor: '#d1fae5',
      borderRadius: '9999px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    },
    successIcon: {
      color: '#10b981'
    },
    successTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    successText: {
      color: '#4b5563',
      marginBottom: '1.5rem'
    },
    successSubText: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    returnButton: {
      marginTop: '2rem',
      padding: '0.5rem 1.5rem',
      backgroundColor: '#3b82f6',
      color: 'white',
      borderRadius: '0.5rem',
      transition: 'background-color 0.2s ease'
    },
    returnButtonHover: {
      backgroundColor: '#2563eb'
    },
    errorContainer: {
      marginTop: '1rem',
      padding: '0.75rem',
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'flex-start'
    },
    errorIcon: {
      color: '#ef4444',
      marginRight: '0.5rem',
      marginTop: '0.125rem'
    },
    errorMessage: {
      color: '#b91c1c',
      fontSize: '0.875rem'
    }
  };
  
  const renderProgressBar = () => {
    return (
      <div style={styles.progressBarContainer}>
        <div style={styles.progressStepsContainer}>
          {['Company Information', 'Contact Person', 'Documentation'].map((label, index) => (
            <div key={index} style={styles.progressStep}>
              <div style={styles.progressStepCircle(step === index + 1, step > index + 1)}>
                {step > index + 1 ? <Check size={16} /> : index + 1}
              </div>
              <span style={styles.progressStepText(step === index + 1)}>{label}</span>
            </div>
          ))}
        </div>
        <div style={styles.progressBar}>
          <div style={styles.progressBarFill((step - 1) * 50)}></div>
        </div>
      </div>
    );
  };
  
  const renderCompanyInfoStep = () => {
    return (
      <>
        <h3 style={styles.sectionTitle}>
          <Building style={styles.sectionTitleIcon} size={20} />
          Company Information
        </h3>
        
        <div style={{...styles.formGrid, '@media (min-width: 768px)': styles.formGridDesktop}}>
          <div style={styles.fullWidth}>
            <label style={styles.formLabel}>
              Company Name*
            </label>
            <input
              type="text"
              name="companyName"
              style={styles.formInput(!!formErrors.companyName)}
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter your company name"
            />
            {formErrors.companyName && (
              <p style={styles.errorText}>{formErrors.companyName}</p>
            )}
          </div>
          
          <div>
            <label style={styles.formLabel}>
              Business Email*
            </label>
            <div style={styles.inputWithIcon}>
              <Mail size={16} style={styles.inputIcon} />
              <input
                type="email"
                name="email"
                style={styles.inputWithIconPadding(!!formErrors.email)}
                value={formData.email}
                onChange={handleChange}
                placeholder="company@example.com"
              />
            </div>
            {formErrors.email && (
              <p style={styles.errorText}>{formErrors.email}</p>
            )}
          </div>
          
          <div>
            <label style={styles.formLabel}>
              Phone Number*
            </label>
            <div style={styles.inputWithIcon}>
              <Phone size={16} style={styles.inputIcon} />
              <input
                type="tel"
                name="phone"
                style={styles.inputWithIconPadding(!!formErrors.phone)}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+123 456 7890"
              />
            </div>
            {formErrors.phone && (
              <p style={styles.errorText}>{formErrors.phone}</p>
            )}
          </div>
          
          <div>
            <label style={styles.formLabel}>
              Year Founded
            </label>
            <div style={styles.inputWithIcon}>
              <Calendar size={16} style={styles.inputIcon} />
              <input
                type="number"
                name="foundedYear"
                min="1900"
                max={new Date().getFullYear()}
                style={styles.inputWithIconPadding(false)}
                value={formData.foundedYear}
                onChange={handleChange}
                placeholder="2020"
              />
            </div>
          </div>
          
          <div>
            <label style={styles.formLabel}>
              Company Size
            </label>
            <select
              name="companySize"
              style={styles.formInput(false)}
              value={formData.companySize}
              onChange={handleChange}
            >
              <option value="">Select company size</option>
              {companySizeOptions.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>
          
          <div style={styles.fullWidth}>
            <label style={styles.formLabel}>
              Business Address*
            </label>
            <div style={styles.inputWithIcon}>
              <MapPin size={16} style={styles.inputIcon} />
              <input
                type="text"
                name="address"
                style={styles.inputWithIconPadding(!!formErrors.address)}
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your business address"
              />
            </div>
            {formErrors.address && (
              <p style={styles.errorText}>{formErrors.address}</p>
            )}
          </div>
          
          <div style={styles.fullWidth}>
            <label style={styles.formLabel}>
              Website URL
            </label>
            <input
              type="url"
              name="website"
              style={styles.formInput(false)}
              value={formData.website}
              onChange={handleChange}
              placeholder="https://your-company.com"
            />
          </div>
        </div>
      </>
    );
  };
  
  const renderContactPersonStep = () => {
    return (
      <>
        <h3 style={styles.sectionTitle}>
          <User style={styles.sectionTitleIcon} size={20} />
          Contact Person Information
        </h3>
        
        <div style={{...styles.formGrid, '@media (min-width: 768px)': styles.formGridDesktop}}>
          <div style={styles.fullWidth}>
            <label style={styles.formLabel}>
              Full Name*
            </label>
            <input
              type="text"
              name="contactName"
              style={styles.formInput(!!formErrors.contactName)}
              value={formData.contactName}
              onChange={handleChange}
              placeholder="Enter contact person's name"
            />
            {formErrors.contactName && (
              <p style={styles.errorText}>{formErrors.contactName}</p>
            )}
          </div>
          
          <div>
            <label style={styles.formLabel}>
              Position/Job Title
            </label>
            <input
              type="text"
              name="contactPosition"
              style={styles.formInput(false)}
              value={formData.contactPosition}
              onChange={handleChange}
              placeholder="e.g. HR Manager"
            />
          </div>
          
          <div style={{gridColumn: 'span 2', '@media (min-width: 768px)': {gridColumn: 'span 1'}}}>
            <label style={styles.formLabel}>
              Email Address*
            </label>
            <div style={styles.inputWithIcon}>
              <Mail size={16} style={styles.inputIcon} />
              <input
                type="email"
                name="contactEmail"
                style={styles.inputWithIconPadding(!!formErrors.contactEmail)}
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="contact@example.com"
              />
            </div>
            {formErrors.contactEmail && (
              <p style={styles.errorText}>{formErrors.contactEmail}</p>
            )}
          </div>
          
          <div>
            <label style={styles.formLabel}>
              Phone Number*
            </label>
            <div style={styles.inputWithIcon}>
              <Phone size={16} style={styles.inputIcon} />
              <input
                type="tel"
                name="contactPhone"
                style={styles.inputWithIconPadding(!!formErrors.contactPhone)}
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="+123 456 7890"
              />
            </div>
            {formErrors.contactPhone && (
              <p style={styles.errorText}>{formErrors.contactPhone}</p>
            )}
          </div>
        </div>
      </>
    );
  };
  
  const renderDocumentationStep = () => {
    return (
      <>
        <h3 style={styles.sectionTitle}>
          <FileText style={styles.sectionTitleIcon} size={20} />
          Required Documentation
        </h3>
        
        <div style={{marginTop: '1.5rem', marginBottom: '1.5rem'}}>
          <div style={{marginBottom: '1.5rem'}}>
            <label style={styles.formLabel}>
              Business Certificate / Registration*
            </label>
            <div style={styles.dropZone(
              !!formData.businessCertificate,
              !!formErrors.businessCertificate
            )}>
              <div style={styles.dropZoneContent}>
                {formData.businessCertificate ? (
                  <div style={styles.filePreview}>
                    <Check size={20} style={styles.filePreviewIcon} />
                    <span style={styles.filePreviewText}>{formData.businessCertificate.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload size={24} style={styles.uploadIcon} />
                    <p style={styles.dropZoneText}>Drag and drop or click to upload</p>
                    <p style={styles.dropZoneSubText}>PDF, JPG or PNG (Max 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  name="businessCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  style={styles.fileInput}
                />
              </div>
            </div>
            {formErrors.businessCertificate && (
              <p style={styles.errorText}>{formErrors.businessCertificate}</p>
            )}
            <p style={styles.helpText}>
              Upload your official business certificate issued by the government
            </p>
          </div>
          
          <div style={{marginBottom: '1.5rem'}}>
            <label style={styles.formLabel}>
              Tax Certificate / KRA PIN Certificate*
            </label>
            <div style={styles.dropZone(
              !!formData.taxCertificate,
              !!formErrors.taxCertificate
            )}>
              <div style={styles.dropZoneContent}>
                {formData.taxCertificate ? (
                  <div style={styles.filePreview}>
                    <Check size={20} style={styles.filePreviewIcon} />
                    <span style={styles.filePreviewText}>{formData.taxCertificate.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload size={24} style={styles.uploadIcon} />
                    <p style={styles.dropZoneText}>Drag and drop or click to upload</p>
                    <p style={styles.dropZoneSubText}>PDF, JPG or PNG (Max 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  name="taxCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  style={styles.fileInput}
                />
              </div>
            </div>
            {formErrors.taxCertificate && (
              <p style={styles.errorText}>{formErrors.taxCertificate}</p>
            )}
            <p style={styles.helpText}>
              Upload your valid tax compliance certificate
            </p>
          </div>
          
          <div style={{marginBottom: '1.5rem'}}>
            <label style={styles.formLabel}>
              Director/Owner Identification Document*
            </label>
            <div style={styles.dropZone(
              !!formData.identificationDoc,
              !!formErrors.identificationDoc
            )}>
              <div style={styles.dropZoneContent}>
                {formData.identificationDoc ? (
                  <div style={styles.filePreview}>
                    <Check size={20} style={styles.filePreviewIcon} />
                    <span style={styles.filePreviewText}>{formData.identificationDoc.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload size={24} style={styles.uploadIcon} />
                    <p style={styles.dropZoneText}>Drag and drop or click to upload</p>
                    <p style={styles.dropZoneSubText}>PDF, JPG or PNG (Max 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  name="identificationDoc"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  style={styles.fileInput}
                />
              </div>
            </div>
            {formErrors.identificationDoc && (
              <p style={styles.errorText}>{formErrors.identificationDoc}</p>
            )}
            <p style={styles.helpText}>
              Upload a valid ID card, passport, or other government-issued identification
            </p>
          </div>
          
          <div>
            <label style={styles.formLabel}>
              Additional Document (Optional)
            </label>
            <div style={styles.dropZone(
              !!formData.additionalDoc,
              false
            )}>
              <div style={styles.dropZoneContent}>
                {formData.additionalDoc ? (
                  <div style={styles.filePreview}>
                    <Check size={20} style={styles.filePreviewIcon} />
                    <span style={styles.filePreviewText}>{formData.additionalDoc.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload size={24} style={styles.uploadIcon} />
                    <p style={styles.dropZoneText}>Drag and drop or click to upload</p>
                    <p style={styles.dropZoneSubText}>PDF, JPG or PNG (Max 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  name="additionalDoc"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  style={styles.fileInput}
                />
              </div>
            </div>
            <p style={styles.helpText}>
              Upload any additional supporting documents (business plan, permits, etc.)
            </p>
          </div>
        </div>
      </>
    );
  };
  
  const renderSuccessScreen = () => {
    return (
      <div style={styles.successContainer}>
        <div style={styles.successIconContainer}>
          <Check size={32} style={styles.successIcon} />
        </div>
        <h2 style={styles.successTitle}>Registration Successful!</h2>
        <p style={styles.successText}>
          Your employer registration has been submitted successfully.
          Our team will review your information and get back to you within 48 hours.
        </p>
        <p style={styles.successSubText}>
          A confirmation email has been sent to {formData.email}
        </p>
        <button
          type="button"
          style={styles.returnButton}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
          onClick={() => window.location.reload()}
        >
          Return to Homepage
        </button>
      </div>
    );
  };

  const renderStepContent = () => {
    if (submitted) {
      return renderSuccessScreen();
    }
    
    switch (step) {
      case 1:
        return renderCompanyInfoStep();
      case 2:
        return renderContactPersonStep();
      case 3:
        return renderDocumentationStep();
      default:
        return null;
    }
  };
  
  return (
    <div style={styles.container}>
      {!submitted && (
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Employer Registration</h2>
          <p style={styles.headerText}>
            Register your business to start posting jobs and finding talented candidates.
          </p>
        </div>
      )}
      
      {!submitted && renderProgressBar()}
      
      <div style={styles.contentContainer}>
        {renderStepContent()}
        
        {!submitted && formErrors.form && (
          <div style={styles.errorContainer}>
            <AlertCircle size={16} style={styles.errorIcon} />
            <p style={styles.errorMessage}>{formErrors.form}</p>
          </div>
        )}
        
        {!submitted && (
          <div style={styles.buttonContainer}>
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                style={styles.buttonPrevious}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Previous
              </button>
            )}
            
            {step < 3 && (
              <button
                type="button"
                onClick={nextStep}
                style={styles.buttonNext}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
              >
                Next
              </button>
            )}
            
            {step === 3 && (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  ...styles.buttonNext,
                  ...(submitting ? styles.buttonDisabled : {})
                }}
                onMouseOver={(e) => !submitting && (e.target.style.backgroundColor = '#2563eb')}
                onMouseOut={(e) => !submitting && (e.target.style.backgroundColor = '#3b82f6')}
              >
                {submitting ? (
                  <span style={styles.loadingText}>
                    <svg style={styles.loadingIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"></circle>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : "Submit Registration"}
              </button>
            )}
          </div>
        )}
        
        {!submitted && step === 3 && (
          <div style={styles.disclaimerContainer}>
            <AlertCircle size={14} style={styles.disclaimerIcon} />
            <p>
              By submitting this registration, you confirm that all information provided is accurate and complete. 
              You agree to our Terms of Service and Privacy Policy. We may contact you for verification purposes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerRegistration;