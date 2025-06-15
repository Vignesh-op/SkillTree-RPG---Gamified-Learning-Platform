import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SkillTree from './pages/SkillTree';
import Quests from './pages/Quests';
import Profile from './pages/Profile';
import Social from './pages/Social';
import Resume from './pages/Resume';
import Games from './pages/Games';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';

function App() {
  // In a real app, we'd check authentication state here
  const isAuthenticated = false;

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Protected routes */}
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skilltree" element={<SkillTree />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/social" element={<Social />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/games" element={<Games />} />
      </Route>
    </Routes>
  );
}

export default App;