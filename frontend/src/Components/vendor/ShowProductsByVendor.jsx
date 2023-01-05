import { useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { SHOW_VENDOR_PRODUCT_DEV } from '../../constants/constant';
import { FaUserEdit } from "react-icons/fa"
import { GoDiffAdded } from "react-icons/go"
import { FiLogOut } from "react-icons/fi"
import ProductCard from '../../assets/ProductCard';

const ShowProductsByVendor = () => {
  const token = localStorage.getItem("jwt");
  const [Data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (!token) {
      window.location.href = "/"
    } else {
      axios.get(SHOW_VENDOR_PRODUCT_DEV, {
        headers: {
          'authorization': token
        }
      })
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
  }, [])

  const filteredData = Data.filter(value => {
    if (search === "") {
      return value;
    } if (value.productName.toLowerCase().includes(search.toLowerCase())) {
      return value.productName
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="d-inline-flex">
                  <Link to="/addProduct">
                    <GoDiffAdded size={30} color={"white"} className='mx-2 mt-1' />
                  </Link>
                  <Link to="/vendor">
                    <FaUserEdit size={37} color={"white"} className='mx-2' />
                  </Link>
                  <input type="text" className="form-control mx-2" placeholder="Search Here" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <h3 className="text-light" onClick={logoutUser}><FiLogOut /></h3>
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
                      productId={val.productId}
                      productImage={val.productImage}
                      productPrice={val.productPrice}
                      productName={val.productName}
                      productQuantity={val.productQuantity}
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

export default ShowProductsByVendor;