import React from "react";

export default function Brokerage() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6" style={{lineHeight: "30px"}}>
                <h2 className="mb-5 text-center text-primary">Borkerage calculator</h2>
                <ul>
                <li>
                    Call & trade and RMS auto-squareoff: Additional charges of $50 +
                    GST per order.
                </li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>
                    Physical copoes of contract notes, if required, shall be charged
                    $20 per contract note, Courier charges apply.
                </li>
                <li>
                    For NRI account (non-PIS), 0.5% per executed order for equity
                    (whichever is lower).
                </li>
                <li>
                    For NRI account (PIS), 0.5% or $100 per executed order for equity
                    (whichever is lower).
                </li>
                <li>
                    If the account is in debt balance, any order placed will be
                    charged $40 per executed order instead of $20 per executed order.
                </li>
                </ul>
            </div>
            <div className="col-1"></div>
            <div className="col-5 text-primary">
                <h2>List of charges</h2>
            </div>
        
        </div>
        
    </div>
  );
}
