import React from 'react'

export default function Hero() {
  return (
    <div className="w-full bg-primary text-white pt-5" style={{width: "full"}}>
      <div className="row px-5 mx-5">
        <div className="col-6">
          <p>Support Portal</p>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <a href="" className='text-white'>Track Tickets</a>
        </div>
      </div>
      <div className="row p-5 mx-5" >
        <div className="col-6">
          
          <h3 className='pb-5'>Search for an answer or browser help topics to create a ticket </h3>
          <input className='p-3 mb-4 fluid border border-white' style={{width: "450px", borderRadius: "3px"}} type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected..' />
          <br/>
          <a href="" style={{color: "white", padding:"4px"}}>Tract account opening</a>
          <a href="" style={{color: "white", padding:"4px"}}>Track segment activation</a>
          <a href="" style={{color: "white", padding:"4px"}}> intraday</a>
          <br />
          <a href="" style={{color: "white", padding:"4px"}}>margins</a>
          <a href="" style={{color: "white", padding:"4px"}}>Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          
          <h2 className='fs-4'>Featured</h2>
          <p>&nbsp; &nbsp; 1. Current Takeovers and Delisting - January 2024</p>
          <p>&nbsp; &nbsp; 2. Latest inreaday leverages - MIS & CO</p>
        </div>
      </div>
    </div>
  )
}
