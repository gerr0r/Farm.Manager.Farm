const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getFarms: [Farm]
    getFarmFields(farmId: ID): [Field]
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

  extend type Region @key(fields: "id") {
    id: ID! @external
    countryId: ID! @external
    country: Country @requires(fields: "countryId")
  }

  extend type Country @key(fields: "code") {
    code: ID @external
  }
`