const table = 'FieldCrop'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      fieldId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Field',
          },
          key: 'id'
        },
        allowNull: false
      },
      cropId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      growth: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table);
  }
};