import React from 'react'

export default function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="media/homeHero.png" alt='hero Image' className='mb-5'/>
                <h1 className='text-muted mt-5 fs-2 pb-2'>Invest in everything</h1>
                <p className='fs-4 pb-5' style={{color: "grey"}}>Online plateform to invest in stocks, derivatives, mutual funds, and more.</p>
                <button style={{width: "20%", margin: "0 auto", borderRadius: "2px"}} className='p-2 btn btn-primary fs-5 mb-5'>Signup for free</button>

            </div>
        </div>
     );
}

