package com.voting.voting_app.controllers;


import com.voting.voting_app.model.Poll;
import com.voting.voting_app.request.Vote;
import com.voting.voting_app.services.PollService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polls")
public class PollController {

    private final PollService pollservice;

    public PollController(PollService pollservice) {
        this.pollservice = pollservice;
    }

    @PostMapping
    public Poll createPoll(@RequestBody Poll poll) {
        // Logic to save the poll to the database
        return pollservice.createPoll(poll);
    }

    @GetMapping
    public List<Poll> getAllPolls() {
        // Logic to save the poll to the database
        return pollservice.getAllPolls();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Poll> getPoll(@PathVariable Long id) {
        // Logic to save the poll to the database
        return pollservice.getPollById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/vote")
    public void vote(@RequestBody Vote vote) {
        // Logic to handle voting for a specific option in a poll
        pollservice.vote(vote.getPollId(), vote.getOptionIndex());
    }
}
