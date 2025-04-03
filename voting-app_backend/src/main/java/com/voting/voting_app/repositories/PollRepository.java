package com.voting.voting_app.repositories;

import com.voting.voting_app.model.Poll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {
    // Custom query methods can be defined here if needed
    // For example, to find polls by a specific attribute
    // List<Poll> findByQuestionContaining(String question);
}
