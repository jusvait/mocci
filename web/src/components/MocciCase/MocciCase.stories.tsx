import MocciCase from './MocciCase'

export const generated = () => {
  return <MocciCase mocciCase={{
    id: 1,
    title: 'Juhannus',
    participants: [{id: 1, name: 'Otto'}],
    createdAt: '2020-01-01',
  }}/>
}

export default { title: 'Components/MocciCase' }
