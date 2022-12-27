import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SHOW_PRODUCTS_DEV } from '../../constants/constant';
import Card from "../../assets/Card"
import { BsSearch } from "react-icons/bs"
import "../../styles/ShowProducts.css"
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
        .then(res => { setData(res.data); console.log(res.data) })
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
                  <input type="text" className="form-control mx-2" value={search} onChange={(e) => setSearch(e.target.value)} />
                  <button className="btn btn-secondary"><BsSearch /></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="conatiner">
        <div className="row mx-3">
          {
            filteredData.map((val) => {
              return (
                <>
                  <div className="col">
                    <Card
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
      </div>
    </>
  )
}

export default ShowProducts