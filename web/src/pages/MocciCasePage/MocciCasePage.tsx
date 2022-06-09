import { MetaTags } from '@redwoodjs/web'
import MocciCaseCell from 'src/components/MocciCaseCell'

interface Props {
  id: number
}

const MocciCasePage = ( {id}: Props ) => {
  return (
    <>
      <MetaTags title="MocciCase" description="MocciCase page" />

      <MocciCaseCell id={id}/>
    </>
  )
}

export default MocciCasePage
