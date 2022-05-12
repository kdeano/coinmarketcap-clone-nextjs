import React, { useState } from 'react'
import ReactSwitch from 'react-switch'

import { Rate, TrendingCard } from '../components'
import { Fire, Btc, Usdt, Gainers, Recent } from '../assets'

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center`
}

const trendingData = [
  {
    number: 1,
    symbol: "BTC",
    name: "Bitcoin",
    icon: Btc,
    isIncrement: true,
    rate: "2.34%"
  },
  {
    number: 2,
    symbol: "USDT",
    name: "Tether",
    icon: Usdt,
    isIncrement: false,
    rate: "9.23%"
  },
  {
    number: 3,
    symbol: "BTC",
    name: "Bitcoin",
    icon: Btc,
    isIncrement: true,
    rate: "2.34%"
  }
]

const Trending = () => {
  const [checked, setChecked] = useState(false)
  
  return (
    <div className='text-white'>
      <div className={styles.trendingWrapper}>
        <div className='flex justify-between'>
          <h1 className={styles.h1}>Todays Cryptocurrency Prices by Market Cap</h1>

          <div className='flex'>
            <p className='text-gray-400'>Highlights &nbsp;</p>
            <ReactSwitch checked={checked} onChange={() => {setChecked(!checked)}} />
          </div>
        </div>
        <br />
        <div className='flex'>
          <p className='text-white'>The global crypto market cap is $1.74T, a &nbsp;</p>
          <span><Rate isIncrement={true} rate='0.53%' /></span>
          <p className='text-white'>&nbsp; increase over the last day.&nbsp;<span className='underline'>Read more</span></p>
        </div>
        <br />

        <div className={styles.flexCenter}>
          <TrendingCard title='Trending' icon={Fire} trendingData={trendingData} />
          <TrendingCard title='Biggest Gainers' icon={Gainers} trendingData={trendingData} />
          <TrendingCard title='Recently Added' icon={Recent} trendingData={trendingData} />
        </div>
      </div>
    </div>
  )
}

export default Trending