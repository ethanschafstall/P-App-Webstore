import CryptoJS from "crypto-js";
import dotenv from 'dotenv';

dotenv.config();

const pepper = process.env.PEPPER;


export function generateHash(message) {
  const salt = addSalt(message.length);
  const hash = CryptoJS.SHA256(salt + message + pepper);
  return [hash.toString(CryptoJS.enc.Hex), salt];
}

export function checkHash(salt, message) {
  const hash = CryptoJS.SHA256(salt + message + pepper);
  return hash.toString(CryptoJS.enc.Hex);
}

function addSalt(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length+10) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
