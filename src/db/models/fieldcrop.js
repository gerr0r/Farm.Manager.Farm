const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class FieldCrop extends Model {
    static associate(models) {
      this.belongsTo(models.Field, {
        foreignKey: 'fieldId'
      })
    }
  };
  FieldCrop.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    fieldId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    cropId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    growth: {
      type: DataTypes.INTEGER,
      defaultValue: 0
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
    tableName: 'FieldCrop',
    modelName: 'FieldCrop',
  });
  return FieldCrop;
};