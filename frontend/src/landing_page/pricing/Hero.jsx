import React from 'react'

export default function Hero() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row text-center mb-5">
        <h2 className='mb-4'>Charges</h2>
        <h4 className='fs-4  text-muted'>List of all charges and taxes</h4>
      </div>
      <div className="row text-center mt-5">
        <div className="col-4">
          <img src="media/pricing0.svg" alt="" style={{maxHeight: "150px"}}/>
          <h1 className='mb-4'>Free equity delivery</h1>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
          <img src="media/pricing20.svg" alt="" style={{maxHeight: "150px"}}/>
          <h1 className='mb-4'> 
            Intraday and F&O trades
          </h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/pricing0.svg" alt="" style={{maxHeight: "150px"}}/>
          <h1 className='mb-4'>
            Free direct MF
          </h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
