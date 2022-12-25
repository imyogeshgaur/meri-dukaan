import {useState} from 'react'
import NavBar from '../../assets/NavBar'
import { FORGET_PASS_URL_DEV } from '../../constants/constant'
import axios from "axios"
import "../../styles/ForgetPassword.css"

const ForgetPassword = () => {

  const [email, setEmail] = useState("");

  const userForgetPass = async()=>{
      try {
          const response = await axios.post(FORGET_PASS_URL_DEV,{email});
          const data = await response.data;
          if(data){
            alert(data.message)
            setEmail("")
          }
      } catch (error) {
        console.log(error)
      }
  }

  const goToPreviousPage = () => {
    window.history.back();
  }
  return (
    <>
      <NavBar />
      <div class="card mx-auto">
        <div class="card-body">
          <h5 class="card-title text-light text-center">Registered Email</h5>
          <div class="mb-3">
            <input type="email" class="form-control mt-4" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4" onClick={userForgetPass}>Send Reset Link</button>
        <button className="btn btn-primary w-50 mx-auto mb-4" onClick={goToPreviousPage}>Back To Login</button>
      </div>
    </>
  )
}

export default ForgetPassword