package com.voting.voting_app.services;

import com.voting.voting_app.model.OptionVote;
import com.voting.voting_app.model.Poll;
import org.springframework.stereotype.Service;
import com.voting.voting_app.repositories.PollRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {
    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Poll createPoll(Poll poll) {
        // Logic to save the poll to the database
        // You can add validation or other business logic here if needed
        // For example, check if the poll already exists, etc.

        // Save the poll using the repository

        return pollRepository.save(poll);
    }
    public List<Poll> getAllPolls() {
        // Logic to retrieve all polls from the database
        // You can add filtering or sorting logic here if needed
        return pollRepository.findAll();
    }

    public Optional<Poll> getPollById(Long id) {
        return pollRepository.findById(id);
    }

    public void vote(Long pollId, int optionIndex) {
        Poll poll=pollRepository.findById(pollId)
                .orElseThrow(() -> new RuntimeException("Poll not found"));
        List<OptionVote> options=poll.getOptions();

        if (optionIndex<0 || optionIndex>=options.size()){
            throw new IllegalArgumentException("invalid Option Index");
        }

        OptionVote selectedOption=options.get(optionIndex);

        selectedOption.setVoteCount(selectedOption.getVoteCount()+1);

        pollRepository.save(poll);

    }
}


