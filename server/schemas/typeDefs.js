const { gql } = require('apollo-server-express');

// * `User` type:

// * `_id`

// * `username`

// * `email`

// * `bookCount`

// * `savedBooks` (This will be an array of the `Book` type.)

// * `Book` type:

// * `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

// * `authors` (An array of strings, as there may be more than one author.)

// * `description`

// * `title`

// * `image`

// * `link`

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: ID!, authors: [String]!, description: String!,title: String!, image: String!, link: String): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
