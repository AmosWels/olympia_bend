const { gql } = require("apollo-server");

const userType = gql`
  type User {
    email: String!
    firstname: String!
    surname: String!
    gender: String!
    password: String!
    token: String
  }
`

module.exports = {
  userType
};
