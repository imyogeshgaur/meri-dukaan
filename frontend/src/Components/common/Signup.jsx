import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import NavBar from '../../assets/NavBar'
import "../../styles/Signup.css"
import { SIGNUP_URL_DEV } from '../../constants/constant';
import Alert from '../../assets/Alert';

const Signup = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [alert, setalert] = useState(null);

  const userSignUp = async () => {
    try {
      if (!email || !password || !userName || !role) {
        setalert({
          msg: "Please Fill All Data !!!",
          type: "danger"
        })
        setTimeout(() => {
          setalert(null)
        }, 1000);
      } else {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
          setalert({
            msg: "Please Fill Email In Correct Format !!!",
            type: "danger"
          })
          setTimeout(() => {
            setalert(null)
          }, 1000);
        } else {
          const response = await axios.post(SIGNUP_URL_DEV, {
            userName,
            email,
            password,
            role
          })
          const data = await response.data;
          if (data.message==="Email Already Exist !!!" || data.message==="User Name Already Exist !!!" ) {
            setalert({
              msg: data.message,
              type: "danger"
            })
            setTimeout(() => {
              setalert(null)
              setUserName("")
              setPassword("")
              setRole("")
              setEmail("")
            }, 1000);
          }else{
            setalert({
              msg: data.message,
              type: "success"
            })
            setTimeout(() => {
              setalert(null)
              window.location.href = "/"
            }, 1000);
          }
        }
      }
    } catch (error) {
      console.log(error)
      setalert({
        msg: "Network Error !!!",
        type: "danger"
      })
      setTimeout(() => {
        setalert(null)
      }, 1000);
    }
  }
  return (
    <>
      <NavBar />
      <Alert alert={alert} />
      <div className="card mx-auto mt-5">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Sign Up Here</h5>
          <div className="mb-3">
            <label className="form-label text-light">Enter User Name</label>
            <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Enter Email</label>
            <input type="email" className="form-control" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Enter Password</label>
            <input type="password" className="form-control" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Why are You Here ?</label>
            <select className="form-select" aria-label="Default select example"
              value={role} onChange={(e) => setRole(e.target.value)}
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