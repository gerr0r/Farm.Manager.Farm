const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Farm extends Model {
    static associate(models) {
      this.hasMany(models.Field, {
        sourceKey: "id",
        foreignKey: "farmId"
      })
    }
  }
  Farm.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name is required"
        }
      }
    },
    ownerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    regionId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Region is required"
        }
      }
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
    tableName: 'Farm',
    modelName: 'Farm',
  })
  return Farm
}