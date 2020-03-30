// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite"
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.PG_CONNECTION_STRING,
      user: process.env.PG_CONNECTION_USER,
      password: process.env.PG_CONNECTION_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations"
    }
  }
};
