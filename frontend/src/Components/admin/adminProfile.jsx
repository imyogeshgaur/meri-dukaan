import { useState, useEffect } from 'react'
import axios from "axios";
import "../../styles/UserProfile.css"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";;
import { DECODE_USER_DEV } from "../../constants/constant"
import { UPDATE_USER_DEV } from "../../constants/constant"
import UpdateUserNav from '../../assets/UpdateUserNav';

const AdminProfile = () => {
  const token = localStorage.getItem("jwt");

  const [file, setfile] = useState("")
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

  useEffect(() => {
    if (!token) {
      window.location.href = "/"
    } else {
      axios.post(DECODE_USER_DEV, "", {
        headers: {
          'authorization': token
        }
      }).then(res => {
        if (res.data.role === "user") {
          window.location.href = "/unauthorized"
        } else {
          setuserName(res.data.userName);
          res.data.firstName!==null ? setfirstName(res.data.firstName) : setfirstName("");
          res.data.middleName!=="null" ? setmiddleName(res.data.middleName) : setmiddleName("");
          res.data.lastName!=="null" ? setlastName(res.data.lastName) : setlastName("");
          res.data.phone!=="null" ? setphone(res.data.phone) : setphone("");
          setemail(res.data.email);
          res.data.addressLine1!=="null" ? setaddressLine1(res.data.addressLine1) : setaddressLine1("")
          res.data.addressLine2!=="null" ? setaddressLine2(res.data.addressLine2) : setaddressLine2("")
          res.data.state!=="null" ? setstate(res.data.state) : setstate("")
          res.data.city!=="null" ? setcity(res.data.city) : setcity("")
          res.data.zip!=="null" ? setzip(res.data.zip) : setzip("")
          res.data.file!=="null" ? setfile(res.data.userImage) : setfile("")
        }
      }
      )
    }
  }, [])

  const handleUpdate = async () => {
    try {
      const formData = new FormData();

      formData.append("firstName", firstName);
      formData.append("middleName", middleName);
      formData.append("lastName", lastName);
      formData.append("phone", phone);
      formData.append("addressLine1", addressLine1);
      formData.append("addressLine2", addressLine2);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("zip", zip);
      formData.append("userImage", file);

      const response = await axios({
        baseURL: UPDATE_USER_DEV,
        method: 'PUT',
        headers: {
          'authorization': token
        },
        data: formData
      });
      const data = await response.data;
      if (data.message === "User Detail Updated !!!") {
        const a = toast.success(data.message,{
          position:toast.POSITION.TOP_CENTER,
          closeOnClick:false,
          closeButton:false,
          style:{
            color:"rgb(35, 216, 35)"
          }
        })
        if(a==1){
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  const goOneStepBack = () => {
    window.location.href = "/vendorProducts"
  }
  return (
    <>
      <UpdateUserNav />
      <div className="card mx-auto mt-1">
        <div className="card-body">
          <div className="wrapper mt-3" id='template1'>
            <div className="file-upload">
              {
                file ?
                  <>
                    <img src={file} alt="user" width={150} height={150} />
                    <input type="file" id="userInput" onChange={(e) => setfile(e.target.files[0])}/>
                  </>

                  :
                  <input type="file" id="userInput" onChange={(e) => setfile(e.target.files[0])} />
              }
            </div>
          </div>
          <div className="wrapper mt-3 hide" id='template2'>
            <div className="file-upload">
              <img alt="" width="300" />
              <input type="file" id="userInput" />
            </div>
          </div>
          <h5 className="card-title text-center text-light my-3">{userName} Profile</h5>
          <div className="row mt-2">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder='Enter Your Middle Name'
                value={middleName}
                onChange={(e) => setmiddleName(e.target.value)}
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
                onChange={(e) => setstate(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your City"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-4 mx-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Zip Code"
              value={zip}
              onChange={(e) => setzip(e.target.value)} />
          </div>
        </div>
        <div className="d-inline-flex">
          <button className="btn btn-primary mb-3 w-50 me-3 ms-2" onClick={handleUpdate}>Update Details</button>
          <button className="btn btn-success mb-3 w-50 me-3 ms-2" onClick={goOneStepBack}>Back</button>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  )
}

export default AdminProfile