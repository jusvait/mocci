import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  TripResolvers,
} from 'types/graphql'

export const trips: QueryResolvers['trips'] = () => {
  return db.trip.findMany()
}

export const trip: QueryResolvers['trip'] = ({ id }) => {
  return db.trip.findUnique({
    where: { id },
  })
}

export const createTrip: MutationResolvers['createTrip'] = ({ input }) => {
  return db.trip.create({
    data: input,
  })
}

export const updateTrip: MutationResolvers['updateTrip'] = ({ id, input }) => {
  return db.trip.update({
    data: input,
    where: { id },
  })
}

export const deleteTrip: MutationResolvers['deleteTrip'] = ({ id }) => {
  return db.trip.delete({
    where: { id },
  })
}

export const Trip: TripResolvers = {
  participants: (_obj, { root }) =>
    db.trip.findUnique({ where: { id: root.id } }).participants(),
}
