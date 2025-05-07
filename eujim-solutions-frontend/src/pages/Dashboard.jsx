// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Shield, GraduationCap } from 'lucide-react';

const Dashboard = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const navigate = useNavigate();

  // Loading messages to display in sequence
  const loadingMessages = [
    "Checking credentials...",
    "Loading your profile...",
    "Preparing your dashboard..."
  ];

  useEffect(() => {
    // Create loading animation sequence
    const phaseTimers = [
      setTimeout(() => setLoadingPhase(1), 600),
      setTimeout(() => setLoadingPhase(2), 1200)
    ];

    const fetchUserRole = async () => {
      try {
        // Simulate API call to get user data
        await new Promise(resolve => setTimeout(resolve, 1800));
        
        // Get user role from localStorage or any auth state management
        const userRole = localStorage.getItem('role') || 'student';
        setRole(userRole);
        
        // Add a slight delay before redirect for smoother transition
        setTimeout(() => {
          // Redirect to the specific dashboard based on role
          if (userRole === 'admin') {
            navigate('/admin-dashboard');
          } else {
            navigate('/student-dashboard'); 
          }
        }, 400);
      } catch (error) {
        console.error('Failed to fetch user role:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();

    // Clean up timers on unmount
    return () => phaseTimers.forEach(timer => clearTimeout(timer));
  }, [navigate]);

  // Modern loading spinner with animations
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="w-full max-w-md p-8 mx-auto text-center">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-ping"></div>
            <div className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">Welcome back</h2>
            <p className="text-gray-600">{loadingMessages[loadingPhase]}</p>
          </div>
          
          <div className="w-full h-2 mb-4 overflow-hidden bg-gray-200 rounded-full">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(loadingPhase + 1) * 33}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  // Transition screen with subtle animation
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="w-full max-w-md p-8 mx-auto text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-white rounded-full shadow-lg">
          {role === 'admin' ? (
            <Shield className="w-8 h-8 text-indigo-600" />
          ) : (
            <GraduationCap className="w-8 h-8 text-emerald-600" />
          )}
        </div>
        
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          {role === 'admin' ? 'Admin Portal' : 'Student Portal'}
        </h2>
        
        <p className="mb-6 text-gray-600">
          Redirecting you to your personalized dashboard
        </p>
        
        <div className="flex items-center justify-center">
          <div className="w-2 h-2 mx-1 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 mx-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 mx-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;