import React, { useState } from 'react';
import { GraduationCap, BookOpen, Calendar, User, Briefcase, Bell, Search, ChevronRight, BarChart2 } from 'lucide-react';

const StudentDashboard = () => {
  const [activeNotifications, setActiveNotifications] = useState(3);
  
  const courses = [
    { id: 1, name: "Data Structures & Algorithms", progress: 68, instructor: "Dr. Smith", nextClass: "Tomorrow" },
    { id: 2, name: "Machine Learning", progress: 42, instructor: "Prof. Johnson", nextClass: "Wednesday" },
    { id: 3, name: "Web Development", progress: 89, instructor: "Ms. Garcia", nextClass: "Today" }
  ];
  
  const assignments = [
    { id: 1, title: "Algorithm Analysis", course: "DSA", dueDate: "May 10", status: "pending" },
    { id: 2, title: "Neural Networks Lab", course: "ML", dueDate: "May 15", status: "in-progress" },
    { id: 3, title: "Portfolio Project", course: "Web Dev", dueDate: "May 12", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="container px-4 py-4 mx-auto">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between p-4 mb-6 bg-white rounded-xl shadow-sm">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-indigo-900">EduHub</span>
          </div>
          
          <div className="relative flex-1 max-w-md mx-6">
            <div className="relative">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input 
                type="text" 
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                placeholder="Search courses, assignments..." 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
              {activeNotifications > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
                  {activeNotifications}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
              <div className="flex items-center justify-center w-8 h-8 text-white bg-indigo-600 rounded-full">
                <span className="font-medium">JS</span>
              </div>
              <span className="text-sm font-medium text-gray-700">John Student</span>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Welcome Section */}
            <div className="p-6 mb-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Welcome back, John!</h1>
                  <p className="mt-1 text-gray-600">You have 3 assignments due this week</p>
                </div>
                <div className="p-3 text-white bg-indigo-600 rounded-xl">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
                <div className="p-4 transition-all border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Course Completion</span>
                    <span className="text-lg font-bold text-indigo-600">67%</span>
                  </div>
                  <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
                
                <div className="p-4 transition-all border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Next Class</span>
                    <span className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">Today</span>
                  </div>
                  <p className="mt-2 text-base font-medium text-gray-800">Web Development</p>
                  <p className="text-sm text-gray-500">2:30 PM - Room 302</p>
                </div>
                
                <div className="p-4 transition-all border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Your Rank</span>
                    <BarChart2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <p className="mt-2 text-lg font-bold text-gray-800">Top 15%</p>
                  <p className="text-sm text-gray-500">in your batch</p>
                </div>
              </div>
            </div>

            {/* Current Courses */}
            <div className="p-6 mb-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Current Courses</h2>
                <button className="flex items-center px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
                  All Courses <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="p-4 transition-all border border-gray-100 rounded-lg hover:shadow-md hover:border-indigo-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded-lg">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{course.name}</h3>
                          <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
                          <span className="px-2 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full">
                            Next: {course.nextClass}
                          </span>
                        </div>
                        <div className="w-24 h-2 mt-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-2 bg-indigo-600 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Assignments */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Upcoming Assignments</h2>
                <span className="px-2 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full">
                  {assignments.length} Total
                </span>
              </div>
              
              <div className="space-y-3">
                {assignments.map(assignment => (
                  <div key={assignment.id} className="flex items-center p-3 transition-all border border-gray-100 rounded-lg hover:shadow-sm hover:border-indigo-200">
                    <div className={`flex-shrink-0 w-2 h-12 mr-3 rounded-full ${
                      assignment.status === 'in-progress' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{assignment.title}</h4>
                      <p className="text-sm text-gray-500">{assignment.course} • Due {assignment.dueDate}</p>
                    </div>
                    <button className="px-3 py-2 ml-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
                      View
                    </button>
                  </div>
                ))}
              </div>
              
              <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-indigo-600 transition-all border border-indigo-200 rounded-lg hover:bg-indigo-50">
                See All Assignments
              </button>
            </div>
            
            {/* Quick Access */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Quick Access</h2>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 transition-all bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600">
                  <User className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">Profile</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 transition-all bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600">
                  <Calendar className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">Schedule</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 transition-all bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600">
                  <Briefcase className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">Jobs</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 transition-all bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-600">
                  <BookOpen className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">Library</span>
                </button>
              </div>
            </div>
            
            {/* Learning Stats */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Learning Stats</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Weekly Study Hours</span>
                    <span className="text-sm font-bold text-gray-800">16/20 hrs</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Assignment Completion</span>
                    <span className="text-sm font-bold text-gray-800">92%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Attendance Rate</span>
                    <span className="text-sm font-bold text-gray-800">85%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;