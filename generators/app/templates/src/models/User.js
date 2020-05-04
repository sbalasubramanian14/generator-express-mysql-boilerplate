const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER(100),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING(100),
  email: Sequelize.STRING(200),
});
