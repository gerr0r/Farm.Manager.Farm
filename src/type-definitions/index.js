const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getFarms: [Farm]
    getFarmFields(farmId: ID): [Field]
    getFieldCrops(fieldId: ID): [FieldCrop]
    getFarmMachines(farmId: ID): [FarmMachine]
  }

  extend type Mutation {
    addFarm(name: String!, regionId: ID!): Farm
  }

  type Farm @key(fields: "id") {
    id: ID!
    name: String!
    region: Region
  }

  type Field @key(fields: "id") {
    id: ID!
    farmId: ID!
    soilType: String!
  }

  type FieldCrop {
    id: ID
    growth: Int
    crop: Crop
  }

  type FarmMachine {
    id: ID
    quantity: Int
    machine: Machine
  }

  extend type Region @key(fields: "id") {
    id: ID! @external
    countryId: ID! @external
    country: Country @requires(fields: "countryId")
  }

  extend type Country @key(fields: "code") {
    code: ID @external
  }

  extend type Crop @key(fields: "id") {
    id: ID! @external
  }

  extend type Machine @key(fields: "id") {
    id: ID! @external
  }
`