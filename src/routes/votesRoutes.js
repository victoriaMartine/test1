import express from 'express';
import votesController from '../Controllers/votesController.js';

const controller = new votesController();
const votesRouter = express.Router();

votesRouter.post('/', controller.createVotes)
votesRouter.get('/',controller.getVotesByDistrict)
votesRouter.get('/getAll', controller.getAllVotes)


export default votesRouter