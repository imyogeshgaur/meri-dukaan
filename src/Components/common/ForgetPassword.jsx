import React from 'react'
import NavBar from '../../assets/NavBar'
import "../../styles/ForgetPassword.css"

const ForgetPassword = () => {
  return (
    <>
    <NavBar />
      <div class="card mx-auto">
        <div class="card-body">
          <h5 class="card-title text-light text-center">Registered Email</h5>
          <div class="mb-3">
            <input type="email" class="form-control mt-4" placeholder="Enter your Email" />
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4">Send Reset Link</button>
      </div>
    </>
  )
}

export default ForgetPassword