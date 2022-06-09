import { MetaTags } from '@redwoodjs/web'

import TripsCell from 'src/components/TripsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <TripsCell />
    </>
  )
}

export default HomePage
