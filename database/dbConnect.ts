import mysql, { Connection } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection: Connection = mysql.createConnection({
    host: 'database', // match docker container name
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }

    console.log('Connected to MySQL as id', connection.threadId);
});

export default connection;