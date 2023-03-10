import { useState, useEffect,useMemo } from 'react'
import axios from 'axios';
import { SHOW_PRODUCTS_DEV } from '../../constants/constant';
import { FiLogOut } from "react-icons/fi"
import { HiUsers } from "react-icons/hi"
import {Link} from "react-router-dom"
import ProductCard from '../../assets/ProductCard';

const AllProducts = () => {
  const token = localStorage.getItem("jwt");
  const [Data, setData] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    if (!token) {
      window.location.href = "/"
    } else {
      axios.get(SHOW_PRODUCTS_DEV, {
        headers: {
          'authorization': token
        }
      })
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
  }, [])

  const filteredData = useMemo(()=>{
    return Data.filter(value => {
        if (search === "") {
          return value;
        } if (value.productName.toLowerCase().includes(search.toLowerCase())) {
          return value.productName
        }
        return null;
      })
  })

  const logoutUser = () => {
    localStorage.removeItem("jwt")
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
                <Link to="/allUsers">
                  <HiUsers color="white" size={35} className="me-2" />
                </Link>
                <input type="text" className="form-control mx-2" placeholder="Search Product" value={search} onChange={(e) => setSearch(e.target.value)} />
                <h3 className="text-light" onClick={logoutUser}><FiLogOut /></h3>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row mx-3">
        {
          filteredData.length === 0 ? <h1 className='text-center'>No Item Found !!!</h1> :
            filteredData.map((val) => {
              return (
                <>
                  <div className="col col-md-3">
                    <ProductCard
                      productImage={val.productImage}
                      productId={val.productId}
                      productName={val.productName}
                    />
                  </div>
                </>
              )
            })
        }
      </div>
    </>
  )
}

export default AllProducts