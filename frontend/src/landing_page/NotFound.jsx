import React from 'react'
// import {Link} from 'react-router-dom'

export default function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1>404 NOT FOUND</h1>
                <p>sorry the page you're looking for does't found</p>
                {/* <Link to="home">
                    <button style={{width: "20%", margin: "0 auto", borderRadius: "2px"}} className='p-2 btn btn-primary fs-5 mb-5'>Go home</button>
                </Link> */}

            </div>
        </div>
     );
}
