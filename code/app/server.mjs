

// Librairies et ressources

import express from "express";
import userRoute from "./routes/User.mjs";
import authRoute from "./routes/Auth.mjs";
import {loginRoute} from "./routes/login.mjs";
import {registerRoute} from "./routes/Register.mjs";



import { generateSalt } from './utils/generateSalt.mjs';

const app = express();

// Middleware pour la lecture des réponses formatées en json
app.use(express.json());

// Les routes
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);

let port = 443;
// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});