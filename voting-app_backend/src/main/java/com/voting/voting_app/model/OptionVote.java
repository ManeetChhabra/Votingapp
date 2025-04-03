package com.voting.voting_app.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class OptionVote {
    private String voteOption;
    private Long voteCount=0L;


        // Constructor for deserialization from a string
        @JsonCreator
        public OptionVote(@JsonProperty("voteOption") String voteOption) {
            this.voteOption = voteOption;
            this.voteCount = 0L; // Default vote count is 0
        }
    }



