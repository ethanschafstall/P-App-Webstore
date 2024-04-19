import express from "express";
import { userRouter } from './routes/User.mjs';
import mysql from "mysql2";

// Get the client
const app = express();
app.use(express.json());
const port = 3000;


app.use('/users/', userRouter);

export const connection = mysql.createConnection({
  host: 'localhost',
  port: 6033,
  user: 'root',
  password: 'root',
  database: 'db_test',
});

// // sample select query
// connection.execute(
//   'SELECT * FROM `t_users`',
//   function (err, results) {
//     console.log(results);
//   }
// );

// // sample insert query
// connection.execute(
//   'INSERT INTO `t_users`(`name`) VALUES (\'test\')',
//   function (err, results) {
//     console.log(results);
//   }
// );


// Démarrage du serveur
app.listen(port, () => {
    console.log('Server running on port 8080');
});