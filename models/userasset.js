"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserAsset extends Model {
    static associate(models) {
      // define association here
      UserAsset.belongsTo(models.User, { foreignKey: "userId" });
      UserAsset.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }
  UserAsset.init(
    {
      userAssetId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "userId",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Product",
          key: "productId",
        },
      },
    },
    {
      sequelize,
      modelName: "UserAsset",
      tableName: "UserAssets",
    }
  );
  return UserAsset;
};
