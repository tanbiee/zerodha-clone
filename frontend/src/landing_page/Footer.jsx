import React from 'react'

export default function Footer() {
    return ( 
        <div className="width-full border-top p-5 mt-5" style={{backgroundColor: "#e3edf354", PaddingBottom: "20px"}}>
            <div className="row">
                <div className="col">
                    <img src="media/logo.svg" alt="" style={{ width: "50%"}}/>
                    <p>&copy; 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
                </div>
                
                <div className="col" style={{textDecoration: "none", lineHeight: "40.5px"}}>
                    <p style={{fontWeight: "bold"}} className='text-muted'>Company</p>
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>About</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Philosophy</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Press & media</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Careers</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Zerodha Cares (CSR)</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Zerodha.tech</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Open source</a><br />
                </div>
                <div className="col" style={{textDecoration: "none", lineHeight: "40.5px"}}>
                    <p style={{fontWeight: "bold"}} className='text-muted'>Support</p>
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Contact us</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Support portal</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>How to file a complaint?</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Status of your complaints</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Bulletin</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Circular</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Z-Connect blog</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Downloads</a><br />
                </div>
                <div className="col" style={{textDecoration: "none", lineHeight: "40.5px"}}>
                    <p style={{fontWeight: "bold"}} className='text-muted'>Company</p>
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Open demat account</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Minor demat account</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>NRI demat account</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Commodity</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Dematerialisation</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Fund transfer</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>MTF</a><br />
                    <a href='' className='text-muted' style={{textDecoration: "none"}}>Referral program</a><br />
                
                </div>
            </div>
        <div className='text-muted mt-5' style={{fontSize: "12px",}}>
            <p>
                Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>
            <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>

            <p>
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p>
                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>

            <p>
                Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
                India's largest broker based on networth as per NSE. NSE broker factsheet
            </p>

            <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>

            <div className="row">
                <div className="col">NSE</div>
                <div className="col">BSE</div>
                <div className="col">MCX</div>
                <div className="col">Terms  & conditions</div>
                <div className="col">Policies & procedures</div>
                <div className="col">Privacy Policy</div>
                <div className="col">Disclosure</div>
                <div className="col">For investor's attention</div>
                <div className="col">Inverstor charter</div>
            </div>
            </div>
        </div>
     );
}

