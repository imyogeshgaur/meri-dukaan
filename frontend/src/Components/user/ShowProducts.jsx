import { useEffect, useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
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
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/")
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
    navigate("/")
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <h3 className="text-light">Meri Dukaan</h3>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <div className="d-inline-flex">
                  <BsFillCartFill size={49} color={"white"} className='mx-2' />
                  <Link to="/user">
                      <FaUserEdit size={37} color={"white"} className='mx-2 mt-1'/>
                  </Link>
                  <input type="text" className="form-control mx-2" placeholder="Search Here" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
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
                    <div className="col">
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