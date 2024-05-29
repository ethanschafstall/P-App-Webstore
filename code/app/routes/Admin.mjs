import express from "express";
import { getAllUsers, getUsers } from "../controllers/AdminController.mjs";
import { connectToDatabase } from "../tools/sqlConnection.mjs";

const connectToDatabaseMiddleware = async (req, res, next) => {
    try {
      req.dbConnection = await connectToDatabase();
      next();
    } catch (error) {
      console.error("Error connecting to the database:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
};
const router = express.Router();

router.get ('/', connectToDatabaseMiddleware, getAllUsers);
router.get ('/:username', connectToDatabaseMiddleware, getUsers);

export default router;