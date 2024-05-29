import express from "express";
import jwt from 'jsonwebtoken';
import { privateKey } from "../privateKey.mjs";

const router = express.Router();

export const getAllUsers = async ( req, res) => {
    const authorizationHeader = req.headers.authorization;

    // Checking if authorization header exists
    if (!authorizationHeader) {
        // If authorization header is missing, return 401 Unauthorized status
        const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`;
        return res.status(401).json({ message });
    }

    const token = authorizationHeader.split(" ")[2]; 

    jwt.verify(token, privateKey, async (error, decodedToken) => {
        if (error) {
            console.log(error);
            let message;
            if (error.name === 'TokenExpiredError') {
                message = `Votre session a expiré. Veuillez vous reconnecter.`;
            } else if (error.name === 'JsonWebTokenError') {
                message = `La demande est invalide. Veuillez vérifier vos informations de connexion.`;
            } else {
                message = `L'utilisateur n'est pas autorisé à accéder à cette ressource.`;
            }
            return res.status(401).json({ message });
        }
        const userRole = decodedToken.userRole;

        if (userRole !== "admin") {
            const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource`;
            return res.status(401).json({ message });
        }

        const queryString = `SELECT * FROM t_users;`;

        try {
            const [rows] = await req.dbConnection.execute(queryString);

            return res.status(200).json({ users: rows });
        } catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });
};

export const getUsers = async ( req, res) => {
    const authorizationHeader = req.headers.authorization;

    // Checking if authorization header exists
    if (!authorizationHeader) {
        // If authorization header is missing, return 401 Unauthorized status
        const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`;
        return res.status(401).json({ message });
    }

    let query = "";

    // checks is the reqest body contains a username
    if (req.body.username) {
        query = req.body.username;
    } 
    else if (req.params.username) // checks is the reqest params contains a username
    {
        query = req.params.username;
    } else {
        const message = "Aucun nom d'utilisateur fourni.";
        return res.status(400).json({ message });
    }

    const token = authorizationHeader.split(" ")[2]; 

    jwt.verify(token, privateKey, async (error, decodedToken) => {
        if (error) {
            console.log(error);
            let message;
            if (error.name === 'TokenExpiredError') {
                message = `Votre session a expiré. Veuillez vous reconnecter.`;
            } else if (error.name === 'JsonWebTokenError') {
                message = `La demande est invalide. Veuillez vérifier vos informations de connexion.`;
            } else {
                message = `L'utilisateur n'est pas autorisé à accéder à cette ressource.`;
            }
            return res.status(401).json({ message });
        }
        const userRole = decodedToken.userRole;

        if (userRole !== "admin") {
            const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource`;
            return res.status(401).json({ message });
        }

        const queryString = `SELECT * FROM t_users WHERE useUsername LIKE ?;`;

        try {
            const [rows] = await req.dbConnection.execute(queryString, [query]);

            return res.status(200).json({ users: rows });
        } catch (error) {
            const message = "Internal Server Error"
            return res.status(500).json({ message });
        }
    });
};

router.get('/', getAllUsers);

router.get('/:username', getUsers);