import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPollById, voteOnPoll } from '../services/api';

const PollDetails = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    fetchPollById(id)
      .then((response) => setPoll(response.data))
      .catch(console.error);
  }, [id]);

  const handleVote = (optionIndex) => {
    voteOnPoll({ pollId: id, optionIndex })
      .then(() => alert('Vote submitted!'))
      .catch(console.error);
  };

  if (!poll) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="mb-4 text-center">{poll.question}</h1>
        <ul className="list-group">
          {poll.options.map((option, index) => (
            <li
              key={index}
              className="list-group-item mb-3 py-3 px-4 d-flex justify-content-between align-items-center rounded shadow-sm option-item"
            >
              <span>
                {option.voteOption} <small className="text-muted">({option.voteCount} votes)</small>
              </span>
              <button
                className="btn btn-primary"
                onClick={() => handleVote(index)}
              >
                Vote
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PollDetails;
