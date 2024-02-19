import express from "express";
import votesRoutes from './votesRoutes.js'
const router = express.Router();

router.use("/votes",votesRoutes)


export default router;