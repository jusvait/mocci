export const schema = gql`
  type Person {
    id: Int!
    name: String!
    trips: Trip!
    tripId: Int!
  }

  type Query {
    people: [Person!]! @skipAuth
    person(id: Int!): Person @skipAuth
  }

  input CreatePersonInput {
    name: String!
    tripId: Int!
  }

  input UpdatePersonInput {
    name: String
    tripId: Int
  }

  type Mutation {
    createPerson(input: CreatePersonInput!): Person! @requireAuth
    updatePerson(id: Int!, input: UpdatePersonInput!): Person! @requireAuth
    deletePerson(id: Int!): Person! @requireAuth
  }
`
