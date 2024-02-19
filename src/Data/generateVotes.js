import { CANDIDATES } from "../Config/config.js"
import { DISTRICTS } from "../Config/config.js"

 const RANDOM_VOTES = 50;

export const generateVotes = ()=>{
    const votes = [];
    for (let index = 0; index < RANDOM_VOTES; index++) {
        votes.push(randomizeVotes())
        
    }
    return votes;
}

 const randomizeVotes = ()=>{
let districtRdm = DISTRICTS[Math.random() * DISTRICTS.length];
let candidateRdm = CANDIDATES[Math.random() * CANDIDATES.length];

return {districtRdm, candidateRdm};
}
