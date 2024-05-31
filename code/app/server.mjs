


// Librairies et ressources

import https from 'node:https';
import http from 'node:http';
import fs from 'node:fs';

import express from "express";
import userRoute from "./routes/User.mjs";
import { loginRoute } from "./routes/login.mjs";
import { registerRoute } from "./routes/Register.mjs";
import adminRoute from "./routes/Admin.mjs";


const options = {
  key: fs.readFileSync('openssl/privateKey.key'),
  cert: fs.readFileSync('openssl/certificate.crt'),
};


const app = express();

// Middleware pour la lecture des réponses formatées en json
app.use(express.json());

// Les routes
app.use('/users', adminRoute);

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);

let portHttp = 443;
let portHttps = 4433;
// Démarrage du serveur
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


 https.createServer(options, app).listen(1111, () => {
    console.log(`Server HTTPS running on https://localhost:${portHttps}`)
});
 
http.createServer(app).listen(portHttp, () => {
    console.log(`Server HTTP running on http://localhost:${portHttp}`)
});