const { gql } = require("apollo-server");

const query = gql`
  type Query {
    profile: User
  }
  type Mutation {
    register(email: String!, firstname:String!, surname:String!, gender:String! password: String!): User
    login(email: String!, password: String!): User
  }
`;

module.exports = {
  query,
};
