const table = 'Farm'
const createdAt = new Date()
const updatedAt = new Date()
const data = [{
  id: '9f0a28bf-3eb6-412c-bc49-3e569902f482',
  name: 'Farm Bavaria 1',
  ownerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  regionId: '6b40499d-2a8a-4281-a242-2b1c0f3e3012',
  createdAt,
  updatedAt
}, {
  id: '431aa88e-84a7-4b01-b1cb-40ca0391dcf9',
  name: 'Farm Bavaria 2',
  ownerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  regionId: '6b40499d-2a8a-4281-a242-2b1c0f3e3012',
  createdAt,
  updatedAt
}, {
  id: '0f70c5d1-fcb4-4e83-85ab-5a06fd1d1e72',
  name: 'Farm Rhodopa',
  ownerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  regionId: 'd9423a9d-ff8d-4e81-8247-7baa88a8dd3c',
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
