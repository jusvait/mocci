import { Link, routes } from '@redwoodjs/router'

import type { Trip } from 'types/graphql'

interface Props {
  mocciCase: Trip
}

const MocciCase = ({mocciCase}: Props) => {
  return (
    <article key={mocciCase.id}>
    <header className="bg-blue-400 p-1 w-fit rounded-md">
      <Link to={routes.mocciCase({ id: mocciCase.id })}>{mocciCase.title}</Link>
    </header>
    <p>Participants:</p>
    {mocciCase.participants.map((participant) => (
      <p key={participant.id}>{participant.name}</p>
    ))}
    <div>Created at: {mocciCase.createdAt}</div>
  </article>
  )
}

export default MocciCase
