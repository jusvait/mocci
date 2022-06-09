import MocciCase from './MocciCase'

export const generated = () => {
  return <MocciCase mocciCase={{
    id: 1,
    name: 'Mocci Case',
    createdAt: '2020-01-01',
    participants: [{id: 1, name: 'Test guy'}]
  }}/>
}

export default { title: 'Components/MocciCase' }
