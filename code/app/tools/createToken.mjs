import jwt from "jsonwebtoken";
import { privateKey } from "../privateKey.mjs"; // Importing private key for JWT

export function generateToken(user) {
    const payload = {
        username: user.useUsername,
        userRole: user.useRole,
    };
    const options = {
        expiresIn: '24h',
    };
    const token = jwt.sign(payload, privateKey, options);
    return token;
}