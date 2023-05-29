import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactsPage from './Pages/ContactsPage';
import DashboardPage from './Pages/DashboardPage';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
