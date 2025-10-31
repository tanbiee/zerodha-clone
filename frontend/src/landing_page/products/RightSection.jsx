import React from 'react'

export default function RightSection({productURL, productName, productDescreption,}) {
  return (
    <div className="container p-5 m-5 text-muted">
      <div className="row d-flex align-items-center">
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescreption}</p> 
          <a href="#" style={{textDecoration: "none"}}>Learn more <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
        </div>
        <div className="col-6">
          <img src={productURL} alt="" className='img-fluid'/>
        </div>
      </div>
    </div>
  )
}
