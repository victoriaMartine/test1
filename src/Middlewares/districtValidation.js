import { DISTRICTS } from "../Config/config.js";

export const districtValidation = (district)=>{
    const isValid = DISTRICTS.includes(district);

    if(!isValid){
        throw new Error(`The district ${district} is invalid`);
    }
}