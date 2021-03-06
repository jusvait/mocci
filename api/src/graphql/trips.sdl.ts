export const schema = gql`
  type Trip {
    id: Int!
    title: String!
    participants: [Person]!
    createdAt: DateTime!
  }

  type Query {
    trips: [Trip!]! @skipAuth
    trip(id: Int!): Trip @skipAuth
  }

  input CreateTripInput {
    title: String!
  }

  input UpdateTripInput {
    title: String
  }

  type Mutation {
    createTrip(input: CreateTripInput!): Trip! @requireAuth
    updateTrip(id: Int!, input: UpdateTripInput!): Trip! @requireAuth
    deleteTrip(id: Int!): Trip! @requireAuth
  }
`
