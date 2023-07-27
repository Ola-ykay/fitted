import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Application from './components/Application';
import AccountCreated from './components/AccountCreated';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    <Router>
  <Routes>
      <Route exact path="/" element={<Application />} />
      <Route path="/account-created" element={<AccountCreated />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  </Router>
    </div>

  );
}

export default App;
