
import express from "express";
import jwt from 'jsonwebtoken';
import { connectToDatabase } from "../tools/sqlConnection.mjs";
import { generateHash } from "../tools/hash.mjs";
import { CheckDataType } from "../tools/TypeChecker.mjs";

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
  const { username, password} = req.body;
  const [hashedPassword, salt] = generateHash(password);

  if (!CheckDataType(username, "string")) {
    return res.status(401).json({ error: "Invalid value types" });
  }

  const queryString = `INSERT INTO t_users (useUsername, usePassword, useSalt) VALUES (?, ?, ?, ?)`;

  try {
    const [result] = await req.dbConnection.execute(queryString, [username, hashedPassword, salt]);

    if (result.affectedRows === 1) {
      const message = `User has successfully registered.`;
      return res.status(200).json({ message });
    } else {
      res.status(401).json({ error: "Failed to register user." });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { registerRoute }; // Exporting the router for use in other files