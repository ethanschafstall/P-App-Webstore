import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 6033,
    user: 'root',
    password: 'root',
    database: 'db_test',
});