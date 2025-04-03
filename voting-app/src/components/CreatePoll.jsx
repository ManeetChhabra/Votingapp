import React, { useState } from 'react';
import { createPoll } from '../services/api';

const CreatePoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']); // Start with two empty options

  const handleSubmit = (e) => {
    e.preventDefault();

    // Transform options into OptionVote objects
    const formattedOptions = options.map((option) => ({
      voteOption: option,
      voteCount: 0, // Default vote count is 0
    }));

    // Send poll data in the required format
    createPoll({ question, options: formattedOptions })
      .then(() => {
        alert('Poll created successfully!');
        setQuestion('');
        setOptions(['', '']); // Reset form after submission
      })
      .catch((error) => {
        console.error('Error creating poll:', error);
        alert('Failed to create poll.');
      });
  };

  return (
    <div className="container mt-5">
      <h1>Create a New Poll</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Question</label>
          <input
            type="text"
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Options</label>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="form-control mb-2"
              value={option}
              onChange={(e) =>
                setOptions(options.map((o, i) => (i === index ? e.target.value : o)))
              }
              required
            />
          ))}
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => setOptions([...options, ''])} // Add an empty option field
          >
            Add Option
          </button>
        </div>
        <button type="submit" className="btn btn-primary">Create Poll</button>
      </form>
    </div>
  );
};

export default CreatePoll;
