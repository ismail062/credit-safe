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
        field: "name",
      },
      state: {
        type: Sequelize.STRING,
        field: "state",
      },
      country: {
        type: Sequelize.STRING,
        field: "country",
      },
      touristRating: {
        type: Sequelize.INTEGER,
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
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cities");
  },
};
