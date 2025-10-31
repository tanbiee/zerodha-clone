import React from 'react'

export default function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container mt-5 text-muted">
      <div className="row d-flex align-items-center">
          <div className="col-6 p-5">
            <img src={imageURL} alt="" className='img-fluid'/>
          </div>
          <div className="col-1"></div>
          <div className="col-5 p-5 mt-5">
              <h1 className='fs-2'>{productName}</h1>
              <p>{productDescription}</p>
              <div className='fs-6 text-muted'>
                <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                <a href={learnMore} style={{marginLeft: "45px", textDecoration: "none"}}>Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
              </div>
              <div className='mt-4'>
                <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="" /></a>
                <a href={appStore} style={{marginLeft: "45px"}}><img src="media/appstoreBadge.svg" alt="" /></a>

              </div>
              
              
          </div>
      </div>
    </div>
  )
}
