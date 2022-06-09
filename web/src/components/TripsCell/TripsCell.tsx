import type { TripsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


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
        <article key={trip.id}>
          <header>
            <h2>{trip.title}</h2>
          </header>
          <p>Participants:</p>
          {trip.participants.map((participant) => (
            <p key={participant.id}>{participant.name}</p>
          ))}
          <div>Created at: {trip.createdAt}</div>
        </article>
      ))}
    </>
  )
}
