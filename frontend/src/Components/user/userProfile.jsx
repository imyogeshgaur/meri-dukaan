import { useState, useEffect } from 'react'
import axios from "axios";
import "../../styles/userProfile.css"
import { useNavigate } from 'react-router';
import { DECODE_USER_DEV } from "../../constants/constant"
import { UPDATE_USER_DEV } from "../../constants/constant"
const UserProfile = () => {
  const token = localStorage.getItem("jwt");

  const [userName, setuserName] = useState("")
  const [firstName, setfirstName] = useState("")
  const [middleName, setmiddleName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [addressLine1, setaddressLine1] = useState("")
  const [addressLine2, setaddressLine2] = useState("")
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")
  const [zip, setzip] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/")
    } else {
      axios.post(DECODE_USER_DEV, "", {
        headers: {
          'authorization': token
        }
      }).then(res => {
        setuserName(res.data.userName);
        setfirstName(res.data.firstName);
        setmiddleName(res.data.middleName);
        setlastName(res.data.lastName);
        setphone(res.data.phone);
        setemail(res.data.email);
        setaddressLine1(res.data.addressLine1);
        setaddressLine2(res.data.addressLine2);
        setstate(res.data.state);
        setcity(res.data.city);
        setzip(res.data.zip)
      }
      )
    }
  }, [])

  const handleUpdate = async () => {
    try {
      const response = await axios.get(UPDATE_USER_DEV, {
        headers: {
          'authorization': token
        }
      })
      const data = await response.data;
      if (data.message === "User Detail Updated !!!") {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const goOneStepBack = ()=>{
    window.history.back();
  }
  return (
    <>
      <div className="card mx-auto mt-4">
        <div className="card-body">
          <div className="wrapper mt-3" id='template1'>
            <div className="file-upload">
              <input type="file" id="userInput" />
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <div className="wrapper mt-3 hide" id='template2'>
            <div className="file-upload">
              <img alt="" width="300" />
              <input type="file" id="userInput" />
            </div>
          </div>
          <h5 className="card-title text-center my-3">{userName} Profile</h5>
          <div className="row mt-2">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your First Name"
                value={firstName}
                onchange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder='Enter Your Middle Name'
                value={middleName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder='Enter Your Last Name'
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                disabled={true}
                value={email} />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Address Line 1"
                value={addressLine1}
                onChange={(e) => setaddressLine1(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Address Line 2"
                value={addressLine2}
                onChange={(e) => setaddressLine2(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input 
              type="text" 
              className="form-control"
               placeholder="Enter Your State"
               value={state}
               onChange={(e)=>setstate(e.target.value)}
               />
            </div>
            <div className="col">
              <input 
              type="text" 
              className="form-control" 
              placeholder="Enter Your City" 
              value={city}
              onChange={(e)=>setcity(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-4 mx-1">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Your Zip Code"
            value={zip}
            onChange={(e)=>setzip(e.target.value)} />
          </div>
        </div>
        <div className="d-inline-flex">
          <button className="btn btn-primary mb-3 w-50 me-3 ms-2" onClick={handleUpdate}>Update Details</button>
          <button className="btn btn-success mb-3 w-50 me-2" onClick={goOneStepBack}>Back</button>
        </div>
      </div>
    </>
  )
}

export default UserProfile