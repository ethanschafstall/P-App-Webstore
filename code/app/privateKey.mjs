import dotenv from 'dotenv';

dotenv.config();

const key = process.env.PRIVATE_KEY;

export const privateKey = key;