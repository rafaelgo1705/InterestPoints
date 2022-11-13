"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("interest-points", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.DataTypes.STRING,
      coordinateX: Sequelize.DataTypes.INTEGER,
      coordinateY: Sequelize.DataTypes.INTEGER,
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable("interest-points");
  },
};
