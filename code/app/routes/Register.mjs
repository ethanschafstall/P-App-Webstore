
import express from "express";
import jwt from 'jsonwebtoken';
import { connectToDatabase } from "../tools/sqlConnection.mjs";
import { hash } from "../tools/hash.mjs";
const registerRoute = express(); // Creating a new instance of express router

const connectToDatabaseMiddleware = async (req, res, next) => {
    try {
      req.dbConnection = await connectToDatabase();
      next();
    } catch (error) {
      console.error("Error connecting to the database:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

// Endpoint for handling user login
registerRoute.post('/', connectToDatabaseMiddleware, async (req, res) => {
    const { username, password, role} = req.body;
    const [hashedPassword, salt] = hash(password);

    if (!CheckDataType(username, "string") || !CheckDataType(role, "string")) {
        return res.status(401).json({ error: "Invalid value types" });
    }
    const queryString2 = `Insert Into t_users (useUsername, usePassword, useRole, useSalt) Values (?,?,?,?)`;
    try {
      const [rows] = await req.dbConnection.execute(queryString2, [username, hashedPassword, role, salt]);
      if (rows.length < 0) {
        
  
        const message = `user has successfully connected`;
      return res.status(200).json({message});
  
        
  
      } else {
        console.log(rows)
        res.status(401).json({ error: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

const CheckDataType = (value, type) => {

    return typeof value === type
}
export { registerRoute }; // Exporting the router for use in other files