import { MODE } from '../Config/config.js';
import VotesMemoryDao from './votesMemoryDao.js';


 class Factory{
    constructor(){

    }
    static factory = ()=>{
        if(MODE === 'memory'){
            return{votesDao: new VotesMemoryDao()} 
        }
}
}export default Factory;

