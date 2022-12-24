import React from 'react'
import NavBar from '../../assets/NavBar'
import "../../styles/ResetPassword.css"

const ResetPassword = () => {
  return (
    <>
      <NavBar />
      <div class="card mx-auto">
        <div class="card-body">
          <h5 class="card-title text-light text-center">Reset Password</h5>
          <div class="mb-3">
            <label for="formGroupExampleInput" className="form-label text-light">Enter New Password</label>
            <input type="password" class="form-control" placeholder="Enter your new Passsword" />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" className="form-label text-light">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Confirm Your New Password" />
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4">Reset Password</button>
      </div>
    </>
  )
}

export default ResetPassword