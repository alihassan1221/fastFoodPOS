require('dotenv').config(); // Manually load environment variables from .env file

module.exports = () => {
  return {
    client: 'pg', // for PostgreSQL
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    migrations: {
      directory: './database/migrations', // Folder for migration files
    },
  };
};
