import CryptoJS from "crypto-js";

export function hash(message) {
  const baseSalt = addSalt(message.length+101);
  console.log(baseSalt)
  const finalSalt = saltTheSalt(baseSalt);
  console.log(finalSalt)
  const hash = CryptoJS.SHA256(message+finalSalt);
  console.log(hash.toString(CryptoJS.enc.Hex))
  return [hash.toString(CryptoJS.enc.Hex), baseSalt];
}

function addSalt(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
function saltTheSalt(salt){
  let finalSalt = '';
  for (let index = 3; index < salt.length-9; index++) {
    if (index % 2 == 0) {
      finalSalt += salt[index];
    }
  }
  return finalSalt;
}