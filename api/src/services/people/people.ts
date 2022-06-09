import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  PersonResolvers,
} from 'types/graphql'

export const people: QueryResolvers['people'] = () => {
  return db.person.findMany()
}

export const person: QueryResolvers['person'] = ({ id }) => {
  return db.person.findUnique({
    where: { id },
  })
}

export const createPerson: MutationResolvers['createPerson'] = ({ input }) => {
  return db.person.create({
    data: input,
  })
}

export const updatePerson: MutationResolvers['updatePerson'] = ({
  id,
  input,
}) => {
  return db.person.update({
    data: input,
    where: { id },
  })
}

export const deletePerson: MutationResolvers['deletePerson'] = ({ id }) => {
  return db.person.delete({
    where: { id },
  })
}

export const Person: PersonResolvers = {
  trips: (_obj, { root }) =>
    db.person.findUnique({ where: { id: root.id } }).trips(),
}
