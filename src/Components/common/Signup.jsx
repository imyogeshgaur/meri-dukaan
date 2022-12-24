import React from 'react'
import NavBar from '../../assets/NavBar'
import "../../styles/Signup.css"

const Signup = () => {
  return (
    <>
      <NavBar />
      <div class="card mx-auto">
        <div class="card-body">
          <h5 class="card-title text-light text-center">Sign Up Here</h5>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label text-light">Enter User Name</label>
            <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name" />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label text-light">Enter Email</label>
            <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Enter your Email" />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label text-light">Enter Password</label>
            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Password" />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label text-light">Why are You Here ?</label>
            <select class="form-select" aria-label="Default select example">
              <option></option>
              <option value="user">To purchase Products</option>
              <option value="vendor">To Sell Products</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4">Sign Up</button>
      </div>
    </>
  )
}

export default Signup