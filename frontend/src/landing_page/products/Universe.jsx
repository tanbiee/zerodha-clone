import React from "react";

export default function Universe() {
  return (
    <div className="container text-muted text-center">
      <h3 className="mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </h3>
      <h2 className="mb-3">The Zerodha Universe</h2>
      <p className="fs-6">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row mb-5">
        <div className="col-4 p-5">
          <img src="media/zerodhaFundhouse.png" alt=""  className="img-fluid" style={{ maxHeight: "50px", objectFit: "contain"}}/>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/sensibullLogo.svg" alt="" className="img-fluid" style={{ maxHeight: "50px", objectFit: "contain"}}/>
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/tijori.svg" alt="" className="img-fluid" style={{ maxHeight: "50px", objectFit: "contain"}}/>
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 p-5">
          <img src="media/streakLogo.png" alt="" className="img-fluid" style={{ maxHeight: "50px", objectFit: "contain"}}/>
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/smallcaseLogo.png" alt="" className="img-fluid" style={{ maxHeight: "50px", objectFit: "contain"}}/>
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/dittoLogo.png" alt="" className="img-fluid" style={{ maxHeight: "50px", objectFit: "contain"}}/>
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <button className="btn btn-primary p-2 px-3 fs-4 mb-4" style={{borderRadius: "2px"}}>Sign up for free</button>
    </div>
  );
}
