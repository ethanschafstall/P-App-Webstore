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

      // // HS256
      // // signer et renvoyer votre token ici (utiliser un code http de succès)
      // const secrectKey = "test";  
      // const token = jwt.sign({ name: "hello", iat: Math.floor(Date.now() / 1000) - 30 }, secrectKey,
      //   { algorithm: 'HS256',
      //   expiresIn: "2y" } /* Token expires in 2 year*/
      // );
      // const message = `L'utilisateur a été connecté avec succès`;
      // // Return success message along with user data and token
      // return res.status(200).json({ message, token});

      const message = `user has successfully connected`;
      const token = jwt.sign({ name: "hello", iat: Math.floor(Date.now() / 1000) - 30 }, privateKey, {
        expiresIn: "2y" // Token expires in 1 year
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


