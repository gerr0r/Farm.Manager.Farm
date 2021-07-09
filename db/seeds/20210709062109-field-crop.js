const table = 'FieldCrop'
const createdAt = new Date()
const updatedAt = new Date()
const data = [{ 
  id: 'c4853e97-c375-45d1-a54b-2c3b8d1cc470', 
  fieldId: '657994cd-138a-40b3-889a-cd7fbd57a70e',
  cropId: 'ba544f4e-ae7c-4f77-8b2a-230c5cbb11f0',
  growth: 25,
  createdAt, 
  updatedAt 
}, { 
  id: '2974d4e1-bd8f-42b2-8835-3e5f39915cd1', 
  fieldId: '657994cd-138a-40b3-889a-cd7fbd57a70e',
  cropId: '18b5408b-dc01-4a55-ba68-4a68de6d5f36',
  growth: 30,
  createdAt, 
  updatedAt 
}, { 
  id: 'e5ee4d1a-ebbf-4a29-bd95-adfd61fe1ceb', 
  fieldId: 'bcba64ab-8ab3-49bf-8eea-5beb67952830',
  cropId: 'ed8328b2-28a3-4925-875a-a54c5c61ae3f',
  growth: 80,
  createdAt, 
  updatedAt 
}, { 
  id: 'e8a48a6c-f9b2-451f-89d6-26e6a044cbdd', 
  fieldId: '5c1719a8-ea3f-4d45-9b87-3233be9d9d2f',
  cropId: '216bc5cc-0d23-417c-b57b-bffe0beb3753',
  growth: 60,
  createdAt, 
  updatedAt 
}, { 
  id: '995dedb5-20c3-41f4-b109-a87aa15f9111', 
  fieldId: '5c1719a8-ea3f-4d45-9b87-3233be9d9d2f',
  cropId: '2a6ae613-29d4-4a1f-a546-6246f851ed48',
  growth: 32,
  createdAt, 
  updatedAt 
}, { 
  id: 'a9029dde-1fd1-4300-a9e0-b1afb4d0dad3', 
  fieldId: '4464fb59-720d-46a0-887f-e726d49663e8',
  cropId: '047ddf9d-72b2-4958-ab5e-41cfc8ca9cb9',
  growth: 90,
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
