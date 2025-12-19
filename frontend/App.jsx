import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Favorites from './pages/Favorites.jsx';
import StoryDetail from './pages/StoryDetail.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen bg-brand-50">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/create" element={<StoryDetail />} />
              <Route path="/story/:id" element={<StoryDetail />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;