import { connection } from "../server.mjs";
import mysql from "mysql2";

export const UserController = {
    // get single user
    getUser: (req, res) => {

        connection.execute(
        `SELECT * FROM 't_users'`,
        function (err, results) {
            console.log(results);
        }
        );
    },
    // get all users
    getUsers: (req, res) => {
        res.send("User: Sarah");
    }
};
