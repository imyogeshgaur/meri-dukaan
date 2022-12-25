import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";
import NavBar from '../../assets/NavBar'
import "../../styles/Signup.css"
import { SIGNUP_URL_DEV } from '../../constants/constant';

const Signup = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const navigate = useNavigate();
  const userSignUp = async () => {
    try {
      const response = await axios.post(SIGNUP_URL_DEV, {
        userName,
        email,
        password,
        role
      })
      const data = await response.data;
      if (data) {
        alert("User Created !!!")
        setUserName("")
        setPassword("")
        setRole("")
        setEmail("")
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <NavBar />
      <div className="card mx-auto">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Sign Up Here</h5>
          <div className="mb-3">
            <label  className="form-label text-light">Enter User Name</label>
            <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter your Name" value={userName} onChange={(e)=>setUserName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label  className="form-label text-light">Enter Email</label>
            <input type="email" className="form-control" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label  className="form-label text-light">Enter Password</label>
            <input type="password" className="form-control" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Why are You Here ?</label>
            <select className="form-select" aria-label="Default select example"
            value={role} onChange={(e)=>setRole(e.target.value)}
            >
              <option></option>
              <option value="user">To purchase Products</option>
              <option value="vendor">To Sell Products</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-2" onClick={userSignUp}>Sign Up</button>
        <p className='text-light text-center'>Already Rgistered ? <Link style={{ color: "blue", cursor: "pointer", textDecoration: "none" }} className="fw-bold" to="/">Login Here</Link></p>
      </div>
    </>
  )
}

export default Signup