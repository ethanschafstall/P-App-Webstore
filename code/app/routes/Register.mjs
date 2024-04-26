import { generateSalt } from './utils/generateSalt.mjs';
import express from "express";
import jwt from 'jsonwebtoken';

const registerRouter = express(); // Creating a new instance of express router

// Endpoint for handling user login
registerRouter.post("/", (req, res) => {
    const { firstname, lastname, username, password, country, email, npa, address, salt } = req.body;
    
    // Finding the user in the database by username
    User.findOne({ where: { usePseudo: req.body.username } })
        .then((user) => {
            // If user doesn't exist, return 404 error
            if (!user) {
                const message = `L'utilisateur demandé n'existe pas`;
                return res.status(404).json({ message });
            }
            // Comparing the provided password with the hashed password stored in the database
            bcrypt.compare(req.body.password, user.usePassword)
                .then((isPasswordValid) => {
                    // If password is invalid, return 401 error
                    if (!isPasswordValid) {
                        const message = `Le mot de passe est incorrecte`
                        return res.status(401).json({ message });
                    } else {
                        // If password is valid, generate JWT token
                        const token = jwt.sign({ userId: user.id_user}, privateKey, {
                            expiresIn: "1y" // Token expires in 1 year
                        });
                        const message = `L'utilisateur a été connecté avec succès`;
                        // Return success message along with user data and token
                        return res.json({ message, data: user, token});
                    }
                });
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `L'utilisateur n'a pas pu être connecté. Réesssayez dans quelques instants`;
            return res.json({ message, data: error });
        })
})

const CheckDataType = (value, type,) => {
    
}
export { registerRouter }; // Exporting the router for use in other files