import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PollList from './components/PollList';
import PollDetails from './components/PollDetails';
import CreatePoll from './components/CreatePoll';

const App = () => (
  <Router>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Voting App</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">Create Poll</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Main Content */}
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<PollList />} />
        <Route path="/polls/:id" element={<PollDetails />} />
        <Route path="/create" element={<CreatePoll />} />
      </Routes>
    </div>
  </Router>
);

export default App;
