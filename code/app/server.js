const express = require("express");
// Get the client
const mysql = require("mysql2");


// Create the connection to database
const connection = mysql.createConnection({
  host: 'db_container',
  user: 'root',
  database: 'root',
});

// A simple SELECT query
try {
  const [results, fields] = connection.query(
    'SELECT * FROM `t_users` WHERE `name` = "Ethan"'
  );

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}

// Using placeholders
try {
  const [results] = connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45]
  );

  console.log(results);
} catch (err) {
  console.log(err);
}

const app = express();
const userRoute = require('./routes/User');
app.use('/user', userRoute);



// Démarrage du serveur
app.listen(8080, () => {
    console.log('Server running on port 8080');
});