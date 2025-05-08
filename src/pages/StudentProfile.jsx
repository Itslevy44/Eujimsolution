import React, { useState } from 'react';
import { 
  UserIcon, 
  MailIcon, 
  BookOpenIcon, 
  AwardIcon, 
  PlusIcon,
  XIcon,
  Camera,
  Save
} from 'lucide-react';

const StudentProfile = () => {
  const [formData, setFormData] = useState({
    name: 'Jessica Smith',
    email: 'jessica.smith@example.com',
    course: 'Computer Science',
    bio: 'Passionate about web development and UI/UX design. Looking for internship opportunities in tech.',
    phone: '(555) 123-4567',
    location: 'New York, NY',
    certifications: ['HTML & CSS Fundamentals', 'JavaScript Essentials'],
    skills: ['React', 'JavaScript', 'CSS', 'UI Design', 'Git'],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'State University',
        year: '2022 - Present'
      }
    ]
  });

  const [newCertification, setNewCertification] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [activeTab, setActiveTab] = useState('personal');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCertificationAdd = () => {
    if (newCertification.trim() !== '') {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, newCertification],
      });
      setNewCertification('');
    }
  };

  const handleCertificationRemove = (index) => {
    const updatedCertifications = [...formData.certifications];
    updatedCertifications.splice(index, 1);
    setFormData({
      ...formData,
      certifications: updatedCertifications,
    });
  };

  const handleSkillAdd = () => {
    if (newSkill.trim() !== '') {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill],
      });
      setNewSkill('');
    }
  };

  const handleSkillRemove = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you'd make an API call to update the student's profile
    console.log('Student profile updated:', formData);

    // Show success message
    const successNotification = document.getElementById('success-notification');
    successNotification.classList.remove('hidden');
    setTimeout(() => {
      successNotification.classList.add('hidden');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
          <p className="mt-2 text-sm text-gray-600">
            Keep your profile up to date to improve your job matching and career opportunities
          </p>
        </div>

        {/* Success notification */}
        <div 
          id="success-notification" 
          className="hidden fixed top-4 right-4 bg-green-50 border-l-4 border-green-500 p-4 shadow-md rounded-md"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-800">Profile updated successfully!</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg">
          {/* Profile Header */}
          <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow">
                {previewImage ? (
                  <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-indigo-50 text-indigo-500">
                    <UserIcon className="h-12 w-12" />
                  </div>
                )}
                <label htmlFor="profile-image" className="absolute bottom-0 right-0 bg-indigo-600 p-1 rounded-full cursor-pointer">
                  <Camera className="h-4 w-4 text-white" />
                  <input 
                    type="file" 
                    id="profile-image" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="text-xl font-bold text-gray-900">{formData.name || 'Your Name'}</h2>
                <p className="text-sm text-gray-500">{formData.course || 'Your Course'}</p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                form="profile-form"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Profile
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('personal')}
                className={`${
                  activeTab === 'personal'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Personal Information
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`${
                  activeTab === 'skills'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Skills & Certifications
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`${
                  activeTab === 'education'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Education
              </button>
            </nav>
          </div>

          {/* Form */}
          <form id="profile-form" onSubmit={handleSubmit}>
            {/* Personal Information Tab */}
            <div className={activeTab === 'personal' ? 'block' : 'hidden'}>
              <div className="px-4 py-5 sm:p-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                    Current Course
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpenIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="course"
                      id="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={formData.bio}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Tell us about yourself, your career goals, and what you're looking for"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Certifications Tab */}
            <div className={activeTab === 'skills' ? 'block' : 'hidden'}>
              <div className="px-4 py-5 sm:p-6">
                {/* Skills section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {formData.skills.map((skill, index) => (
                      <div key={index} className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleSkillRemove(index)}
                          className="ml-2 text-blue-400 hover:text-blue-600"
                        >
                          <XIcon className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-l-md"
                    />
                    <button
                      type="button"
                      onClick={handleSkillAdd}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Certifications section */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Certifications</h3>
                  <div className="space-y-3 mb-4">
                    {formData.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <div className="flex items-center">
                          <AwardIcon className="h-5 w-5 text-indigo-500 mr-3" />
                          <span>{cert}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCertificationRemove(index)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <XIcon className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex">
                    <input
                      type="text"
                      value={newCertification}
                      onChange={(e) => setNewCertification(e.target.value)}
                      placeholder="Add certification"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-l-md"
                    />
                    <button
                      type="button"
                      onClick={handleCertificationAdd}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Tab */}
            <div className={activeTab === 'education' ? 'block' : 'hidden'}>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Education</h3>
                
                {formData.education.map((edu, index) => (
                  <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Degree
                        </label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => {
                            const updatedEducation = [...formData.education];
                            updatedEducation[index].degree = e.target.value;
                            setFormData({...formData, education: updatedEducation});
                          }}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Institution
                        </label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => {
                            const updatedEducation = [...formData.education];
                            updatedEducation[index].institution = e.target.value;
                            setFormData({...formData, education: updatedEducation});
                          }}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Year
                        </label>
                        <input
                          type="text"
                          value={edu.year}
                          onChange={(e) => {
                            const updatedEducation = [...formData.education];
                            updatedEducation[index].year = e.target.value;
                            setFormData({...formData, education: updatedEducation});
                          }}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      education: [
                        ...formData.education,
                        { degree: '', institution: '', year: '' }
                      ]
                    });
                  }}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add Education
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;