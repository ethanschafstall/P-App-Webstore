import express from "express";
import { get} from "../controllers/UserController.mjs";
import { connectToDatabase } from "../tools/sqlConnection.mjs";

const router = express.Router();
router.get('/:username', get);


export default router;