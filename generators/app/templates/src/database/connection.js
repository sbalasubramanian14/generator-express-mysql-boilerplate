const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "<%= databaseName %>",
  "<%= databaseUsername %>",
  "<%= databasePassword %>",
  {
    host: "<%= databaseHost %>",
    dialect: "mysql"
  }
);

module.exports = sequelize;
global.sequelize = sequelize;
