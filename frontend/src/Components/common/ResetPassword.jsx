import {useState} from 'react'
import { useNavigate,useParams } from 'react-router'
import NavBar from '../../assets/NavBar'
import axios  from "axios";
import "../../styles/ResetPassword.css"
import { RESET_PASS_URL_DEV } from '../../constants/constant';

const ResetPassword = () => {
  const [password, setPassword] = useState("")
  const [confPass, setConfPass] = useState("")
  const navigate = useNavigate();
  const param = useParams()
  const userId = param.id
  const userResetPass = async()=>{
    if(password===confPass){
      const response = await axios.post(RESET_PASS_URL_DEV +"/"+ userId,{password})
      const data = await response.data
      if(data){
        alert(data.message)
        navigate("/")
      }
    }else{
      alert("Password Don't Match !!!")
    }
  }
  return (
    <>
      <NavBar />
      <div class="card mx-auto">
        <div class="card-body">
          <h5 class="card-title text-light text-center">Reset Password</h5>
          <div class="mb-3">
            <label for="formGroupExampleInput" className="form-label text-light">Enter New Password</label>
            <input type="password" class="form-control" placeholder="Enter your new Passsword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" className="form-label text-light">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Confirm Your New Password" value={confPass} onChange={(e)=>setConfPass(e.target.value)}/>
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4" onClick={userResetPass}>Reset Password</button>
      </div>
    </>
  )
}

export default ResetPassword