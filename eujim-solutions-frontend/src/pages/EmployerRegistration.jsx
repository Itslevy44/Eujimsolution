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
  
  const renderProgressBar = () => {
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between mb-2">
          {['Company Information', 'Contact Person', 'Documentation'].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step > index + 1 ? 'bg-green-500' : 
                step === index + 1 ? 'bg-blue-500' : 'bg-gray-300'
              } text-white font-medium`}>
                {step > index + 1 ? <Check size={16} /> : index + 1}
              </div>
              <span className={`text-xs mt-1 ${step === index + 1 ? 'font-medium' : ''}`}>{label}</span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  const renderCompanyInfoStep = () => {
    return (
      <>
        <h3 className="font-medium text-lg mb-4 flex items-center">
          <Building className="mr-2" size={20} />
          Company Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Company Name*
            </label>
            <input
              type="text"
              name="companyName"
              className={`w-full p-2 border rounded-lg ${formErrors.companyName ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter your company name"
            />
            {formErrors.companyName && (
              <p className="text-red-500 text-xs mt-1">{formErrors.companyName}</p>
            )}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Business Email*
            </label>
            <div className="relative">
              <Mail size={16} className="text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                name="email"
                className={`w-full p-2 pl-10 border rounded-lg ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="company@example.com"
              />
            </div>
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone Number*
            </label>
            <div className="relative">
              <Phone size={16} className="text-gray-400 absolute left-3 top-3" />
              <input
                type="tel"
                name="phone"
                className={`w-full p-2 pl-10 border rounded-lg ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+123 456 7890"
              />
            </div>
            {formErrors.phone && (
              <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
            )}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Year Founded
            </label>
            <div className="relative">
              <Calendar size={16} className="text-gray-400 absolute left-3 top-3" />
              <input
                type="number"
                name="foundedYear"
                min="1900"
                max={new Date().getFullYear()}
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                value={formData.foundedYear}
                onChange={handleChange}
                placeholder="2020"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Company Size
            </label>
            <select
              name="companySize"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.companySize}
              onChange={handleChange}
            >
              <option value="">Select company size</option>
              {companySizeOptions.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>
          
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Business Address*
            </label>
            <div className="relative">
              <MapPin size={16} className="text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                name="address"
                className={`w-full p-2 pl-10 border rounded-lg ${formErrors.address ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your business address"
              />
            </div>
            {formErrors.address && (
              <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>
            )}
          </div>
          
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Website URL
            </label>
            <input
              type="url"
              name="website"
              className="w-full p-2 border border-gray-300 rounded-lg"
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
        <h3 className="font-medium text-lg mb-4 flex items-center">
          <User className="mr-2" size={20} />
          Contact Person Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Full Name*
            </label>
            <input
              type="text"
              name="contactName"
              className={`w-full p-2 border rounded-lg ${formErrors.contactName ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.contactName}
              onChange={handleChange}
              placeholder="Enter contact person's name"
            />
            {formErrors.contactName && (
              <p className="text-red-500 text-xs mt-1">{formErrors.contactName}</p>
            )}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Position/Job Title
            </label>
            <input
              type="text"
              name="contactPosition"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.contactPosition}
              onChange={handleChange}
              placeholder="e.g. HR Manager"
            />
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address*
            </label>
            <div className="relative">
              <Mail size={16} className="text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                name="contactEmail"
                className={`w-full p-2 pl-10 border rounded-lg ${formErrors.contactEmail ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="contact@example.com"
              />
            </div>
            {formErrors.contactEmail && (
              <p className="text-red-500 text-xs mt-1">{formErrors.contactEmail}</p>
            )}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone Number*
            </label>
            <div className="relative">
              <Phone size={16} className="text-gray-400 absolute left-3 top-3" />
              <input
                type="tel"
                name="contactPhone"
                className={`w-full p-2 pl-10 border rounded-lg ${formErrors.contactPhone ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="+123 456 7890"
              />
            </div>
            {formErrors.contactPhone && (
              <p className="text-red-500 text-xs mt-1">{formErrors.contactPhone}</p>
            )}
          </div>
        </div>
      </>
    );
  };
  
  const renderDocumentationStep = () => {
    return (
      <>
        <h3 className="font-medium text-lg mb-4 flex items-center">
          <FileText className="mr-2" size={20} />
          Required Documentation
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Business Certificate / Registration*
            </label>
            <div className={`border-2 border-dashed rounded-lg p-4 ${
              formData.businessCertificate ? 'border-green-500 bg-green-50' : 
              formErrors.businessCertificate ? 'border-red-500 bg-red-50' : 'border-gray-300'
            } relative`}>
              <div className="flex flex-col items-center justify-center">
                {formData.businessCertificate ? (
                  <div className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">{formData.businessCertificate.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Drag and drop or click to upload</p>
                    <p className="text-xs text-gray-400">PDF, JPG or PNG (Max 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  name="businessCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
            {formErrors.businessCertificate && (
              <p className="text-red-500 text-xs mt-1">{formErrors.businessCertificate}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Upload your official business certificate issued by the government
            </p>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Tax Certificate / KRA PIN Certificate*
            </label>
            <div className={`border-2 border-dashed rounded-lg p-4 ${
              formData.taxCertificate ? 'border-green-500 bg-green-50' : 
              formErrors.taxCertificate ? 'border-red-500 bg-red-50' : 'border-gray-300'
            } relative`}>
              <div className="flex flex-col items-center justify-center">
                {formData.taxCertificate ? (
                  <div className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">{formData.taxCertificate.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Drag and drop or click to upload</p>
                    <p className="text-xs text-gray-400">PDF, JPG or PNG (Max 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  name="taxCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
            {formErrors.taxCertificate && (
              <p className="text-red-500 text-xs mt-1">{formErrors.taxCertificate}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Upload your valid tax compliance certificate
            </p>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Director/Owner Identification Document*
            </label>
            <div className={`border-2 border-dashed rounded-lg p-4 ${
              formData.identificationDoc ? 'border-green-500 bg-green-50' : 
              formErrors.identificationDoc ? 'border-red-500 bg-red-50' : 'border-gray-300'
            } relative`}>
              <div className="flex flex-col items-center justify-center">
                {formData.identificationDoc ? (
                  <div className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">{formData.identificationDoc.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Drag and drop or click to upload</p>
                    <p className="text-xs text-gray-400">PDF, JPG or PNG (Max 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  name="identificationDoc"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
            {formErrors.identificationDoc && (
              <p className="text-red-500 text-xs mt-1">{formErrors.identificationDoc}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Upload a valid ID card, passport, or other government-issued identification
            </p>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Additional Document (Optional)
            </label>
            <div className={`border-2 border-dashed rounded-lg p-4 ${
              formData.additionalDoc ? 'border-green-500 bg-green-50' : 'border-gray-300'
            } relative`}>
              <div className="flex flex-col items-center justify-center">
                {formData.additionalDoc ? (
                  <div className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">{formData.additionalDoc.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Drag and drop or click to upload</p>
                    <p className="text-xs text-gray-400">PDF, JPG or PNG (Max 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  name="additionalDoc"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Upload any additional supporting documents (business plan, permits, etc.)
            </p>
          </div>
        </div>
      </>
    );
  };
  
  const renderSuccessScreen = () => {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
          <Check size={32} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your employer registration has been submitted successfully.
          Our team will review your information and get back to you within 48 hours.
        </p>
        <p className="text-sm text-gray-500">
          A confirmation email has been sent to {formData.email}
        </p>
        <button
          type="button"
          className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {!submitted && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Employer Registration</h2>
          <p className="text-gray-600">
            Register your business to start posting jobs and finding talented candidates.
          </p>
        </div>
      )}
      
      {!submitted && renderProgressBar()}
      
      <div className="bg-white p-6 rounded-lg">
        {renderStepContent()}
        
        {formErrors.form && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
            <AlertCircle size={18} className="text-red-500 mr-2 mt-0.5" />
            <p className="text-red-600 text-sm">{formErrors.form}</p>
          </div>
        )}
        
        {!submitted && (
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={prevStep}
              >
                Previous
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                className="ml-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                onClick={nextStep}
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                className="ml-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
                disabled={submitting}
                onClick={handleSubmit}
              >
                {submitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Submit Registration"
                )}
              </button>
            )}
          </div>
        )}
      </div>
      
      {!submitted && (
        <div className="mt-6 text-xs text-gray-500 flex items-start">
          <AlertCircle size={14} className="mr-2 mt-0.5 flex-shrink-0" />
          <p>
            By submitting this form, you confirm that all information provided is accurate and 
            documents uploaded are authentic. False information may result in rejection of your 
            application or termination of your account.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployerRegistration;