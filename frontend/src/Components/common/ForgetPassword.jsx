import { useState } from 'react'
import NavBar from '../../assets/NavBar'
import { FORGET_PASS_URL_DEV } from '../../constants/constant'
import axios from "axios"
import "../../styles/ForgetPassword.css"
import Alert from '../../assets/Alert'

const ForgetPassword = () => {
  const [alert, setalert] = useState(null)
  const [email, setEmail] = useState("");

  const userForgetPass = async () => {
    try {
      if (!email) {
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
          const response = await axios.post(FORGET_PASS_URL_DEV, { email });
          const data = await response.data;
          if (data.message === "User Not Exist !!!") {
            setalert({
              msg: data.message,
              type: "danger"
            })
            setTimeout(() => {
              setalert(null)
            }, 1000);
            setEmail("")
          } else {
            setalert({
              msg: data.message,
              type: "success"
            })
            setTimeout(() => {
              setalert(null)
            }, 1000);
            setEmail("")
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

  const goToPreviousPage = () => {
    window.history.back();
  }
  return (
    <>
      <NavBar />
      <Alert alert={alert} />
      <div class="card mx-auto">
        <div class="card-body">
          <h5 class="card-title text-light text-center">Registered Email</h5>
          <div class="mb-3">
            <input type="email" class="form-control mt-4" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4" onClick={userForgetPass}>Send Reset Link</button>
        <button className="btn btn-success w-50 mx-auto mb-4" onClick={goToPreviousPage}>Back To Login</button>
      </div>
    </>
  )
}

export default ForgetPassword