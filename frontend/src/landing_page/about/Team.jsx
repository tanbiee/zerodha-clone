import React from "react";

export default function Team() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">People</h1>
      <div className="row pt-5">
        <div className="col-6 text-center">
          <img src="media/nithinKamath.jpg" alt="" style={{borderRadius: "100%", width: "60%"}} />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h5 className="mt-3">Founder, CEO</h5>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-6 fs-6 text-muted mt-5" style={{lineHeight: 1.8}}>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.
          </p>
           <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
                the Market Data Advisory Committee (MDAC). 
            </p>
            <p>
                Playing basketball is his zen.
            </p>
            <p style={{textDecoration: "none"}}>
                Connect on <a href="/home">Homepage</a> / <a href="#">TradingQnA</a>  / <a href="">Twitter</a>
            </p>
        </div>
      </div>
    </div>
  );
}
