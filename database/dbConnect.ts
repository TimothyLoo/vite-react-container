import mysql, { Connection } from 'mysql2';

const connection: Connection = mysql.createConnection({
    host: 'localhost',
    user: 'tj',
    password: 'tj_password',
    database: 'tj_database',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }

    console.log('Connected to MySQL as id', connection.threadId);
});
