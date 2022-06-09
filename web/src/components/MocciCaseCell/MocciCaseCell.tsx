import MocciCase from 'src/components/MocciCase'

import type { FindMocciCaseQuery, FindMocciCaseQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindMocciCaseQuery($id: Int!) {
    trip(id: $id) {
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

export const Failure = ({
  error,
}: CellFailureProps<FindMocciCaseQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  trip,
}: CellSuccessProps<FindMocciCaseQuery, FindMocciCaseQueryVariables>) => (
  <MocciCase mocciCase={trip}/>
)

