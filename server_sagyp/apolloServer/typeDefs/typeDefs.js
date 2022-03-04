const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    name: String!
    last_name: String!
    rfc: String!
  }

  type Query {
    getUsers: [User]
    #getUsers: String!,
    getUser(name: String!): User
  }
  type Mutation{
    createUser(name: String!, last_name: String!, rfc: String!): User!
  }
`;

module.exports = typeDefs;