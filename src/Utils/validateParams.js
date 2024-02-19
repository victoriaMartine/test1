import { candidateValidation } from "../Middlewares/candidateValidation.js";
import { districtValidation } from "../Middlewares/districtValidation.js";

export const validateParams = (district, candidate)=>{
    let errors = [];

    try{
        candidateValidation(candidate);
    }catch(error){
        errors.push(error);
    }

    try{
        districtValidation(district);
    }catch(error){
        errors.push(error);
    }
    return errors;
}