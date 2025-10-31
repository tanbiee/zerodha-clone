import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

export default function() {
  return (
    <>
        <Hero/>
        <hr className='m-5' />
        <LeftSection imageURL="media/kite.png" productName="kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore=""
        />
        <RightSection productURL="media/console.png" productName="Console" productDescreption="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." />

        <LeftSection imageURL="media/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore=""
        />
        <RightSection productURL="media/landing.svg" productName="Kite Connect API" productDescreption="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." />

        <LeftSection imageURL="media/varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore=""
        />

        <RightSection productURL="media/console.png" productName="Console" productDescreption="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." />
        <Universe/>
    </>
  )
}
