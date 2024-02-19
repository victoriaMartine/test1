import Factory from "../DAOs/factory.js";

class xApi{
    constructor(){
        this.factory= Factory.factory();
    }
    createVotes = async (vote)=>{
        try{
            const data = await this.factory.votesDao.createVotes(vote)
            return data;
        }catch(error){
            return error;
        }
     
    }

    getVotesByDistrict = async (district)=>{
        try{
            const data = await this.factory.votesDao.getVotesByDistrict(district);
            return data;
        }catch(error){
            return error;
        }
    }
    getAllVotes = async ()=>{
        try{
            const data =  await mthis.factory.votesDao.getAllVotes();
            return data;
        }catch(error){
            return error;
        }
    }
}export default xApi;

