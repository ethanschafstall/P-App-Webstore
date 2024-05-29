import express from "express";

// Import du module jwt
import jwt from 'jsonwebtoken';

const router = express.Router();
import { privateKey } from "../privateKey.mjs";


export const get = (req, res) => {
  
    const authorizationHeader = req.headers.authorization;
    // Checking if authorization header exists
    if (!authorizationHeader) {
        // If authorization header is missing, return 401 Unauthorized status
        const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`;
        return res.status(401).json({ message });
    } else {
        // Extracting token from authorization header
        const token = authorizationHeader.split(" ")[2];
        
        // Verifying the token with the secret key
        jwt.verify(token, privateKey, (error, decodedToken) => {
            console.log(token)
            if (error) {
                // If token verification fails, return 401 Unauthorized status
                const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource`;
                return res.status(401).json({ message });
            }
            // Extracting user ID from the decoded token
            const userId = decodedToken.username;
            // Checking if the user ID in the request body matches the one in the token
            if (req.params.username && req.params.username !== userId) {
                // If user ID in the request body doesn't match the one in the token, return 401 Unauthorized status
                const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource`;
                return res.status(401).json({ message });
            } else {
                // If everything is fine, proceed to the next middleware
                return res.status(200).json({ decodedToken });
            } 
        });
    }

};


router.get('/:username', get);

export default router;
