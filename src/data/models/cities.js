"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cities.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { 
        type: DataTypes.STRING, 
        field: "name" 
      },
      state: { 
        type: DataTypes.STRING, 
        field: "state" 
      },
      country: { 
        type: DataTypes.STRING, 
        field: "country" 
      },
      touristRating: { 
        type: DataTypes.DECIMAL(10,1), 
        field: "tourist_rating" 
      },
      establishedDate: { 
        type: DataTypes.DATE, 
        field: "established_date" 
      },
      estimatedPopulation: {
        type: DataTypes.INTEGER,
        field: "estimated_population",
      },
    },
    {
      sequelize,
      modelName: "cities",
    }
  );
  return cities;
};
