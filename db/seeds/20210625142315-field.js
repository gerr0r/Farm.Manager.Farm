const table = 'Field'
const createdAt = new Date()
const updatedAt = new Date()
const data = [{ 
  id: '657994cd-138a-40b3-889a-cd7fbd57a70e', 
  soilType: 'loam',
  farmId: '9f0a28bf-3eb6-412c-bc49-3e569902f482',
  createdAt, 
  updatedAt 
}, { 
  id: 'bcba64ab-8ab3-49bf-8eea-5beb67952830', 
  soilType: 'loam',
  farmId: '9f0a28bf-3eb6-412c-bc49-3e569902f482',
  createdAt, 
  updatedAt 
}, { 
  id: 'c0c40c16-78d3-41ac-8195-a50ea21086e0', 
  soilType: 'loam',
  farmId: '431aa88e-84a7-4b01-b1cb-40ca0391dcf9',
  createdAt, 
  updatedAt 
}, { 
  id: '5c1719a8-ea3f-4d45-9b87-3233be9d9d2f', 
  soilType: 'silt',
  farmId: '431aa88e-84a7-4b01-b1cb-40ca0391dcf9',
  createdAt, 
  updatedAt 
}, { 
  id: '4464fb59-720d-46a0-887f-e726d49663e8', 
  soilType: 'peat',
  farmId: '0f70c5d1-fcb4-4e83-85ab-5a06fd1d1e72',
  createdAt, 
  updatedAt 
}, { 
  id: '0c775bc3-560e-4761-946c-2fa9304081fb', 
  soilType: 'peat',
  farmId: '0f70c5d1-fcb4-4e83-85ab-5a06fd1d1e72',
  createdAt, 
  updatedAt 
}]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(table, data, {})
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete(table, null, {})
  }
}
