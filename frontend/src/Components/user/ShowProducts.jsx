import { useEffect, useState, useMemo } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { SHOW_PRODUCTS_DEV } from '../../constants/constant';
import { FaUserEdit } from "react-icons/fa"
import { BsFillCartFill } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import ProductCard from '../../assets/ProductCard';

const ShowProducts = () => {
  const token = localStorage.getItem("jwt");
  const [Data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [cartSize, setCartSize] = useState("")

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
      const storage = { ...localStorage }
      delete storage.jwt
      const products = storage;
      setCartSize(Object.keys(products).length);
    }
  }, [])

  const filteredData = useMemo(() => {
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="d-inline-flex">
                  <a href="/cart">
                    <BsFillCartFill size={34} color={"white"} className='mx-2 mt-1' />
                  </a>
                  <p style={{background:"red",borderRadius:"50%",width:"3rem"}} className="text-white text-center mt-2">{cartSize}</p>
                  <Link to="/user">
                    <FaUserEdit size={37} color={"white"} className='mx-2 mt-1' />
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

export default ShowProducts