  import { CANDIDATES } from "../Config/config.js";
  import { generateVotes } from "../Data/generateVotes.js";

  class VotesMemoryDao{
    constructor(){
        this.votes = [];
    }

    createVotes = async (vote)=>{
        try{
            this.votos.push(vote)
            console.log("---------------")
            console.log('vote created succesfully')
        }catch(error){
            console.log(error);
        }
    }
    getVotesByDistrict = async (district) =>{
       const votesByDistrict = this.votes.filter((vote) => vote.district === district);
        const votesCA = votesByDistrict.filter((vote) => vote.candidate === CANDIDATES[0]).length;
        const votesCB = votesByDistrict.filter((vote) => vote.candidate === CANDIDATES[1]).length;
        const votesCC = votesByDistrict.filter((vote) => vote.candidate === CANDIDATES[2]).length;
        const votesBL = votesByDistrict.filter((vote) => vote.candidate === CANDIDATES[3]).length;
                console.log('votos para los candidatos a b y c: ' + votesCA + votesCB  + votesCC + votesBL )
       
      return {candidatoA:votesCA, candidatoB:votesCB, candidatoC:votesCC, enBlanco:votesBL};
    // const contados = {}
    // votesByDistrict.forEach(voto => {
    //    if (contados[voto.candidato]){
    //       contados[voto.candidato] += 1
    //    } else {
    //       contados[voto.candidato] = 1
    //    }
    // });

    // CANDIDATES.forEach(c => {
    //   if(!contados[c]){
    //     contados[c] = 0
    //   }
    // })

    // return contados;
    }
    getAllVotes = async ()=>{

            this.votes.push(...generateVotes);
            
        return this.votes;
    }
}export default VotesMemoryDao;