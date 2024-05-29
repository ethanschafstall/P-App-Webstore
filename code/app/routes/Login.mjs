import express from "express"; // Importing express for router creation
import { connectToDatabase } from "../tools/sqlConnection.mjs";
import { checkHash } from "../tools/hash.mjs";
import { generateToken } from "../tools/createToken.mjs";

const loginRoute = express(); // Creating a new instance of express router

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
loginRoute.post("/", connectToDatabaseMiddleware, async (req, res) => {
    const { username, password } = req.body;
    const queryString = `SELECT * FROM t_users WHERE useUsername = ?`;

    try {
        
        const [result] = await req.dbConnection.execute(queryString, [username]);
        const user = result[0];
        const salt = user.useSalt;
        const stockedHash = user.usePassword;

        if (stockedHash != checkHash(salt, password)) {
            const message = `Invalid username or password.`;
            return res.status(401).json({ message });
        }
        const message = `User has successfully logged in.`;
        const token = generateToken(user);
        return res.status(200).json({ message, token });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

export { loginRoute }; // Exporting the router for use in other files