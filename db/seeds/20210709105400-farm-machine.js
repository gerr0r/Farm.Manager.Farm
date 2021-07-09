const table = 'FarmMachine'
const createdAt = new Date()
const updatedAt = new Date()
const data = [{ 
  id: '923691d6-18b5-4a7b-8e52-228d18f69a0e', 
  farmId: '9f0a28bf-3eb6-412c-bc49-3e569902f482',
  machineId: '989a2e39-f758-41f2-b434-b4c61ec2b41c',
  quantity: 2,
  createdAt, 
  updatedAt 
}, { 
  id: 'ca6631d5-3729-4874-ad9a-a9a8f6ee336f', 
  farmId: '9f0a28bf-3eb6-412c-bc49-3e569902f482',
  machineId: 'c685a247-87c1-41f0-bcc7-1a4863976606',
  quantity: 1,
  createdAt, 
  updatedAt 
}, { 
  id: 'f03bf7b9-e46f-43b2-84fb-fbc63d5e599f', 
  farmId: '431aa88e-84a7-4b01-b1cb-40ca0391dcf9',
  machineId: 'a39878c1-2896-4363-b2cf-4f66053703e1',
  quantity: 2,
  createdAt, 
  updatedAt 
}, { 
  id: 'f93d0d5c-777e-4bf7-8735-2c7dc9c6c602', 
  farmId: '431aa88e-84a7-4b01-b1cb-40ca0391dcf9',
  machineId: 'f2b9308f-1705-4a8a-9d2d-d57c7ae957c6',
  quantity: 3,
  createdAt, 
  updatedAt 
}, { 
  id: '3bb2d431-e04d-4eb0-b6e6-8209dfad9db1', 
  farmId: '0f70c5d1-fcb4-4e83-85ab-5a06fd1d1e72',
  machineId: '03edc043-78fe-4bdb-9c64-f3e1f1e75864',
  quantity: 1,
  createdAt, 
  updatedAt 
}, { 
  id: '11c7521d-dc93-4cc0-928f-6d62841142cc', 
  farmId: '0f70c5d1-fcb4-4e83-85ab-5a06fd1d1e72',
  machineId: 'cfec6d45-de2d-4b1c-877f-915ff088d63f',
  quantity: 1,
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
