import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/polls';

export const fetchPolls = () => axios.get(API_BASE_URL);
export const fetchPollById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const createPoll = (poll) => axios.post(API_BASE_URL, poll);
export const voteOnPoll = (voteData) => axios.post(`${API_BASE_URL}/vote`, voteData);
