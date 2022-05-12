import type { NextPage } from 'next'

import { Header, Trending, CMCTable } from '../components'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='mt-10'></div>
      <Trending />
      <div className='mt-20'></div>
      <CMCTable />
    </div>
  )
}

export default Home
