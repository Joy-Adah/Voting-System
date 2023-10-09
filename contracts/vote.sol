// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Voting {
    struct Voter {
        bool voted;
    }

    struct Candidate {
        uint voteCount;
    }

    mapping (address => Voter) public voters;
    mapping (uint => Candidate) public candidates;

    function vote(uint candidateId) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You have already voted");
        sender.voted = true;
        candidates[candidateId].voteCount += 1;
    }

    function getVotes(uint candidateId) public view returns (uint) {
        return candidates[candidateId].voteCount;
    }
    
}