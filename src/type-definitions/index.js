const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getFarms: [Farm]
    getFarmFields(farmId: ID): [Field]
  }

  type Farm @key(fields: "id") {
    id: ID!
    name: String!
  }

  type Field @key(fields: "id") {
    id: ID!
    farmId: ID!
  }
`