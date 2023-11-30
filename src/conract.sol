// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Election {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    address public owner;
    bool public election;
    bool public electionEnded;
    string[] public candidateNames;
    mapping(string => Candidate) public candidates;
    mapping(string => bool) public contestant;
    mapping(address => bool) public voted;


    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function contest(string memory name) public {
        require(!election, "Election already started");
        require(!contestant[name], "Already exists");

        candidates[name] = Candidate(name, 0);
        contestant[name] = true;
        candidateNames.push(name);
    }

    function startElection() public onlyOwner{
        require(!election, "Election already started");
        election = true;
        electionEnded = false;

    }
    function getAllContestants() public view returns (string[] memory) {
    require(election, "Election has not ended yet");

    return candidateNames;
}

    function voteForCandidate(string memory name) public {
        require(election, "Election has not started yet");
        require(contestant[name], "Candidate does not exist");
        require(!voted[msg.sender],"Already Voted");
voted[msg.sender] = true;

        candidates[name].voteCount += 1;
    }

    function endElection() public onlyOwner {
        require(!electionEnded, "No election running now");
        electionEnded = true;
    }

    function getWinner() public view returns (string memory) {
        require(electionEnded, "Election has not ended yet");
        require(election, "Election has not started yet");

        string memory winner;
        uint256 maxVotes = 0;

        // Iterate through candidateNames array to find the one with the highest vote count
        for (uint256 i = 0; i < candidateNames.length; i++) {
            string memory candidateName = candidateNames[i];
            uint256 votes = candidates[candidateName].voteCount;

            if (votes > maxVotes) {
                maxVotes = votes;
                winner = candidateName;
            }
        }

        return winner;
    }


function isElectionStarted() public view returns(bool){
    return  election;
}
function isElectionEnded() public view returns(bool){
    return  electionEnded;
}


}
