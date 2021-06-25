const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Field extends Model {
    static associate(models) {
      this.belongsTo(models.Farm, {
        foreignKey: 'farmId'
      })
    }
  }
  Field.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    soilType: {
      type: DataTypes.ENUM,
      values: ['sandy','clay','silt','peat','chalk','loam']
    },
    farmId: {
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'Farm',
        },
        key: 'id'
      },
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'Field',
    modelName: 'Field',
  });
  return Field
}