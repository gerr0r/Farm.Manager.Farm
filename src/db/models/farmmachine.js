const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class FarmMachine extends Model {
    static associate(models) {
      this.belongsTo(models.Farm, {
        foreignKey: 'farmId'
      })
    }
  };
  FarmMachine.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    farmId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    machineId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    quantity: {
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
    tableName: 'FarmMachine',
    modelName: 'FarmMachine',
  });
  return FarmMachine;
};