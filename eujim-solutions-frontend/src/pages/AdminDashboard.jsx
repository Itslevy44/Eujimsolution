// src/pages/AdminDashboard.js
import React, { useState } from 'react';
import { Shield, Users, Book, Building2, BarChart3, Bell, Settings, Search, Menu } from 'lucide-react';

const AdminDashboard = () => {
  const [notifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Admin stats data
  const stats = [
    { label: 'Total Users', value: '1,245', change: '+12%', positive: true },
    { label: 'Active Courses', value: '38', change: '+5%', positive: true },
    { label: 'Pending Approvals', value: '7', change: '-3%', positive: false },
    { label: 'Weekly Engagement', value: '67%', change: '+4%', positive: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between px-4 py-3 mx-auto">
          <div className="flex items-center">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 mr-2 text-gray-600 bg-gray-100 rounded-full lg:hidden hover:bg-gray-200"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center">
              <Shield className="w-8 h-8 mr-2 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-800">AdminPortal</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center px-3 py-2 bg-gray-100 rounded-lg">
            <Search className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-64 text-sm bg-transparent outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <div className="relative mr-4">
              <Bell className="w-6 h-6 text-gray-600" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full transform translate-x-1 -translate-y-1">
                  {notifications}
                </span>
              )}
            </div>
            <div className="flex items-center p-1 bg-gray-200 rounded-full">
              <img
                src="/api/placeholder/40/40"
                alt="Admin"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="container px-4 mx-auto">
        <div className="flex mt-6">
          {/* Sidebar - hidden on mobile, shown on larger screens */}
          <aside className={`fixed inset-y-0 left-0 z-20 flex-col w-64 h-full pt-20 pb-4 bg-white border-r border-gray-200 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:h-auto lg:pt-0 transition-transform duration-300 ease-in-out`}>
            <div className="px-4 py-4">
              <div className="flex items-center p-2 mb-6 bg-blue-50 rounded-xl">
                <Shield className="w-10 h-10 p-2 text-white bg-indigo-600 rounded-lg" />
                <div className="ml-3">
                  <p className="text-xs font-medium text-indigo-600">Admin Portal</p>
                  <p className="text-sm font-bold">Control Center</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <a href="#" className="flex items-center px-4 py-3 text-gray-800 bg-indigo-50 rounded-lg group">
                  <Users className="w-5 h-5 mr-3 text-indigo-600" />
                  <span className="font-medium">User Management</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-100 group">
                  <Book className="w-5 h-5 mr-3 text-gray-500" />
                  <span>Course Settings</span>
                </a>
                <a href="/admin-employer-approval" className="flex items-center justify-between px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-100 group">
                  <div className="flex items-center">
                    <Building2 className="w-5 h-5 mr-3 text-gray-500" />
                    <span>Employer Approvals</span>
                  </div>
                  <span className="px-2 py-1 text-xs text-white bg-red-500 rounded-full">7</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-100 group">
                  <BarChart3 className="w-5 h-5 mr-3 text-gray-500" />
                  <span>Analytics</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-100 group">
                  <Settings className="w-5 h-5 mr-3 text-gray-500" />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:pl-8">
            {/* Welcome Header */}
            <div className="p-6 mt-2 mb-6 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Welcome Back, Admin</h2>
                  <p className="mt-1 text-indigo-100">Here's what's happening today</p>
                </div>
                <button className="px-4 py-2 mt-4 font-medium text-indigo-700 bg-white rounded-lg md:mt-0 hover:bg-indigo-50">
                  View Activity Log
                </button>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                  <div className={`inline-flex items-center px-2 py-1 mt-2 text-xs font-medium rounded ${stat.positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Main Modules */}
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">User Management</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <Users className="w-10 h-10 p-2 text-white bg-indigo-600 rounded-lg" />
                    <div className="ml-4">
                      <h4 className="font-medium text-indigo-700">Manage System Access</h4>
                      <p className="mt-1 text-sm text-gray-600">Assign roles and permissions to users</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                    Manage Users
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Course Settings</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <Book className="w-10 h-10 p-2 text-white bg-indigo-600 rounded-lg" />
                    <div className="ml-4">
                      <h4 className="font-medium text-indigo-700">Course Configuration</h4>
                      <p className="mt-1 text-sm text-gray-600">Manage curriculum and schedules</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                    Configure Courses
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Employer Approvals</h3>
                  <span className="px-2 py-1 text-xs text-white bg-red-500 rounded-full">7 New</span>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <Building2 className="w-10 h-10 p-2 text-white bg-indigo-600 rounded-lg" />
                    <div className="ml-4">
                      <h4 className="font-medium text-indigo-700">Registration Review</h4>
                      <p className="mt-1 text-sm text-gray-600">Process employer account requests</p>
                    </div>
                  </div>
                  <button 
                    className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                    onClick={() => window.location.href = '/admin-employer-approval'}
                  >
                    View Requests
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">System Analytics</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View Details</button>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <BarChart3 className="w-10 h-10 p-2 text-white bg-indigo-600 rounded-lg" />
                    <div className="ml-4">
                      <h4 className="font-medium text-indigo-700">Performance Metrics</h4>
                      <p className="mt-1 text-sm text-gray-600">Monitor platform usage and trends</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;