import * as dotenv from 'dotenv';
import express from "express";
import router from './src/routes/router.js'
import { PORT } from './src/Config/config.js';
//import votesRoutes from './src/routes/votesRoutes.js'

dotenv.config();

const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//
app.use(router);

app.listen(PORT, ()=>{
    console.log(` listening at port http://localhost:${PORT}`);
})
