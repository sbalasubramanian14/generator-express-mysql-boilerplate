"use strict";

//To create migration:- sequelize migration:create --name create_user_table
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING(100),
      email: Sequelize.STRING(200),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
