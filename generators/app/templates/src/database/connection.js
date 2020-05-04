const Sequelize = require("sequelize");

const sequelize = new Sequelize("mydatabase", "admin", "admin@123", {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = sequelize;
global.sequelize = sequelize;
