import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const StudentLogin = lazy(() => import("../pages/StudentLogin"));
const EmployerLogin = lazy(() => import("../pages/EmployerLogin"));
const AdminLogin = lazy(() => import("../pages/AdminLogin"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const EmployerDashboard = lazy(() => import("../pages/EmployerDashboard"));
const EmployerRegistration = lazy(() => import("../pages/EmployerRegistration"));
const AdminEmployerApproval = lazy(() => import("../pages/AdminEmployerApproval"));
const StudentProfile = lazy(() => import("../pages/StudentProfile"));
const Programs = lazy(() => import("../pages/Programs"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="p-4 text-center">
      <div className="w-16 h-16 mx-auto border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/employerlogin" element={<EmployerLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employer-dashboard"
          element={
            <PrivateRoute>
              <EmployerDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/employer-registration" element={<EmployerRegistration />} />
        <Route
          path="/student-profile"
          element={
            <PrivateRoute>
              <StudentProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-employer-approval"
          element={
            <PrivateRoute>
              <AdminEmployerApproval />
            </PrivateRoute>
          }
        />
        {/* 404 fallback route */}
        <Route path="*" element={<div className="text-center p-4">404 - Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;