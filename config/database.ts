export default ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "fastFoodPOS"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "admin1234"),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
    autoMigrations: true
  };
};
