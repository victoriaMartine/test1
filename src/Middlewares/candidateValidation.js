import { CANDIDATES } from "../Config/config.js";

export const candidateValidation = (candidate)=>{
    const isValid = CANDIDATES.includes(candidate);

    if(!isValid){
        throw new Error(`The candidate ${candidate} is invalid`);
    }
}