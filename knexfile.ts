import path from 'path';
import dotenv from "dotenv";

dotenv.config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'fazenda',
      insecureAuth : true
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
  },
  
};
