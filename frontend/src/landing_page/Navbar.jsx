import React from "react";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg " style={{backgroundColor: "#fff", boxShadow: "0 1px 1px 0 rgba(72, 72, 103, 0.11)"}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="media/logo.svg" alt="" style={{width: "25%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
          
         <form action="">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/products">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="support">
                  Support
                </Link>
              </li>
            </ul>    
         </form>
            
            
          </div>
        </div>
      </nav>
    </>
  );
}
