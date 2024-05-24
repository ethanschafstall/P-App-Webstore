import express from "express";

// Il manque l'import du module jwt

import jwt from 'jsonwebtoken';

// import { connection } from "../tools/sqlConnection.mjs";
import { connectToDatabase } from "../tools/sqlConnection.mjs";

import { privateKey } from "../privateKey.mjs";

const router = express.Router();

// Middleware pour la connexion à la base de données
const connectToDatabaseMiddleware = async (req, res, next) => {
  try {
    req.dbConnection = await connectToDatabase();
    next();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


router.post('/', connectToDatabaseMiddleware, async (req, res) => {
  const { username, password } = req.body;

  const queryString = 'SELECT * FROM t_users WHERE useUsername = ? AND usePassword = ?';

  try {
    const [rows] = await req.dbConnection.execute(queryString, [username, password]);
    if (rows.length > 0) {

      
      const message = `user has successfully connected`;
      const token = jwt.sign({ name: "hello", iat: Math.floor(Date.now() / 1000) - 30 }, privateKey, {
        expiresIn: "1y"
    });
    return res.status(200).json({ message, token});


    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;


