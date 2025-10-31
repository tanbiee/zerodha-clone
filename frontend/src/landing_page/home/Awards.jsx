import React from 'react';

export default function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className="row g-5">
                <div className="col-6 p-5">
                    <img src="/media/largestBroker.svg" />
                </div>
                <div className="col-6  p-5">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to over 15% of all the retaill order volumes in india daily by trading and investing in: </p>
                    <div className='row'>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>futute and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency detivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks and IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bond and Gov.Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>  
                    <img src="media/pressLogos.png" alt='logos'style={{width: '80%'}}/> 
                </div>
            </div>

        </div>
     );
}

