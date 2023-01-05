import { useState, useEffect } from 'react'
import axios from 'axios';
import { SHOW_USERS_DEV } from '../../constants/constant';
import { GoPackage } from "react-icons/go"
import { FiLogOut } from "react-icons/fi"
import { Link } from "react-router-dom"
import UserCard from '../../assets/UserCard';
import jwt_decode from "jwt-decode"

const AllUsers = () => {
  const token = localStorage.getItem("jwt");
  const [Data, setData] = useState([])
  const [search, setSearch] = useState("")
  const {userId} = jwt_decode(token);

  useEffect(() => {
    if (!token) {
      window.location.href = "/"
    } else {
      axios.get(SHOW_USERS_DEV, {
        headers: {
          'authorization': token
        }
      })
        .then(res => setData(res.data.filter(usr=>usr.userId !==userId)))
        .catch(err => console.log(err))
    }
  }, [])

  const filteredData = Data.filter(value => {
    if (search === "") {
      return value;
    } if (value.userName.toLowerCase().includes(search.toLowerCase())) {
      return value.userName
    }
    return null;
  })

  const logoutUser = () => {
    localStorage.clear("jwt")
    window.location.href = "/"
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h3 className="text-light">Meri Dukaan</h3>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h3 className="text-light">Welcome Admin</h3>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="d-inline-flex">
                <Link to="/allProducts">
                  <GoPackage color="white" size={35} className="me-2" />
                </Link>
                <input type="text" className="form-control mx-2" placeholder="Search User" value={search} onChange={(e) => setSearch(e.target.value)} />
                <h3 className="text-light" onClick={logoutUser}><FiLogOut /></h3>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row ms-3">
        {
          filteredData.map(val => {
            return (
              <div className="col col-md-3">
                <UserCard
                  userName={val.userName}
                  role={val.role}
                  userImage={val.userImage}
                  userId={val.userId}
                />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default AllUsers