import knex from "knex";
import path from 'path';
import dotenv from "dotenv";

dotenv.config();

// const connection = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: path.resolve(__dirname, 'database.sqlite')
//   },
//   useNullAsDefault: true
// });

const connection = knex({
  client: "pg",
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});


export default connection;