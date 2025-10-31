import React from 'react'

export default function Education() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/education.svg" alt="" style={{width: "90%"}}/>
                </div>
                <div className="col-6">
                    <h1 className='pb-3 fs-2'>Free and open market education</h1>
                    <p className='text-muted pb-3'>Varsity, the target online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className='pb-5' style={{textDecoration: "none"}}>Varsity <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                    <p className='text-muted pb-3'>TradingQ&A, the most active trading and investment community in India for all your market realted queries.</p>
                    <a href="" style={{textDecoration: "none"}}>TradingQ&A <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

