import type { TripsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import MocciCase from 'src/components/MocciCase'

export const QUERY = gql`
  query TripsQuery {
    trips {
      id
      title
      participants {
        id
        name
      }
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ trips }: CellSuccessProps<TripsQuery>) => {
  return (
    <>
      {trips.map((trip) => (
       <MocciCase key={trip.id} mocciCase={trip}/>
      ))}
    </>
  )
}
