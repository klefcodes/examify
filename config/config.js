require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "examify_dev",
    host: DB_HOST,
    dialect: "postgres",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "examify_test",
    host: DB_HOST,
    dialect: "postgres",
    define: {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "examify_prod",
    host: DB_HOST,
    dialect: "postgres",
    define: {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
};
