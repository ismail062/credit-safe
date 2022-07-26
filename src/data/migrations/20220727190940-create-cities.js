"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: "id",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name",
      },
      state: {
        type: Sequelize.STRING,
        field: "state",
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "country",
      },
      touristRating: {
        type: Sequelize.DECIMAL(10,1),
        field: "tourist_rating",
      },
      establishedDate: {
        type: Sequelize.DATE,
        field: "established_date",
      },
      estimatedPopulation: {
        type: Sequelize.INTEGER,
        field: "estimated_population",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cities");
  },
};
