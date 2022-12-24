import React from 'react'
import NavBar from '../../assets/NavBar'
import "../../styles/Signin.css"
const Signin = () => {
  return (
    <>
      <NavBar />
      <div className="card mx-auto">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Login Here</h5>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label text-light">Enter Email</label>
            <input type="email" className="form-control" placeholder="Enter your Email" />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label text-light">Enter Password</label>
            <input type="password" className="form-control" placeholder="Enter your Password" />
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4">Sign In</button>
      </div>
    </>
  )
}

export default Signin