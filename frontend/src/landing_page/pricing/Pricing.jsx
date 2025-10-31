import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

export default function Pricing() {
  return (
    <>
        <Hero/>
        <hr className='m-5'/>
        <OpenAccount/>
        <hr  className='m-5'/>
        <Brokerage/>
        
    </>
  )
}
