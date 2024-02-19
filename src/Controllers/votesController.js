import {request, response} from 'express';
import xApi from '../Api/xApi.js';
import ApiResponse from '../Models/apiResponse.js';
import { validateParams } from '../Utils/validateParams.js';
import { districtValidation } from '../Middlewares/districtValidation.js';


const xapi = new xApi();
 class votesController{
    constructor(){

    }

    createVotes = async (req = request, res= response)=>{
        try{
            const {district, candidate} = req.body;
            if(!district || !candidate) throw new Error('data is missing');
            const errors = validateParams(district, candidate);
            if(errors.length > 0) throw new Error(errors.join(','));

            xapi.createVotes({district, candidate});
            res.status(200).send(new ApiResponse(true, 'registered vote', {district, candidate}))
        }catch(error){
            res.status(500).send(new ApiResponse(false, error.message,null ))
        }
    }
    getVotesByDistrict = async (req = request, res = response) =>{
        
        try{
            const {district} = req.query;
            districtValidation(district);
            const votes= xapi.getVotesByDistrict(district);
            // votes.then((value)=>{
            //     console.log(value);
            // })
            

            res.status(200).send(new ApiResponse(true, `votes from district ${district} ` + this.listVotes(votes), district))
        }catch(error){
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
        getAllVotes = async (req = request, res = response) =>{
            try{
                
                 const data = xapi.getAllVotes();
                 res.status(200).send(new ApiResponse(true, 'all votes ', this.listVotes(data)))
            }catch(error){
                res.status(500).send(new ApiResponse(false, error.message, null));
            }
        }
    listVotes(votes){
       return "votes for candidatoA: " + votes.candidatoA + " candidatoB: " + votes.candidatoB +
        " candidatoC: " + votes.candidatoC  + " en blanco: " + votes.enBlanco ;
    }
}
export default votesController;


