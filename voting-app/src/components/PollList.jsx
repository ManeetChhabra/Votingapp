import React, { useEffect, useState } from 'react';
import { fetchPolls } from '../services/api';
import { Link } from 'react-router-dom';

const PollList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetchPolls()
      .then((response) => setPolls(response.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="mb-4 text-center">Available Polls</h1>
        {polls.length === 0 ? (
          <p className="text-center text-muted">No polls available. Create one!</p>
        ) : (
          <ul className="list-group">
            {polls.map((poll) => (
              <li
                key={poll.id}
                className="list-group-item mb-3 py-3 px-4 rounded shadow-md d-flex justify-content-between align-items-center"
              >
                <Link
                  to={`/polls/${poll.id}`}
                  style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}
                >
                  {poll.question}
                </Link>
                <span className="badge bg-primary rounded-pill">
                  {poll.options.length} Options
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PollList;
