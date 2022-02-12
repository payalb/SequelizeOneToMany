'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Passport.init({
    
    issuedate: DataTypes.DATE,
    location: DataTypes.STRING,
    expirydate: DataTypes.DATE,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Passport',
  });
  return Passport;
};