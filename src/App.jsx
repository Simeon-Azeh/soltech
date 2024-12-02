import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import TechTraining from './pages/TechTraining';
import Gaming from './pages/Gaming';
import Workspaces from './pages/Workspaces';
import ScrollToTop from './components/ScrollToTop';
import Membership from './pages/Membership';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Contest from './pages/Contest';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Drift from './components/Drift'; // Adjust the import path as necessary

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Drift />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tech-training" element={<TechTraining />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contests" element={<Contest />} />
      </Routes>
     
    </Router>
  );
}

export default App;