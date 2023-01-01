import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios';
import "../../styles/UpdateProduct.css"
import { SHOW_VENDOR_PRODUCT_DEV } from '../../constants/constant';
import UpdateUserNav from '../../assets/UpdateUserNav';

const UpdateProduct = () => {
  const token = localStorage.getItem("jwt")
  const [Data, setData] = useState([])
  const [file, setFile] = useState("")
  const [productId, setproductId] = useState("")
  const [productName, setProductName] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (!token) {
      navigate("/")
    } else {
      axios.get(SHOW_VENDOR_PRODUCT_DEV, {
        headers: {
          'authorization': token
        }
      })
        .then(res => {
          setData(res.data.filter(prod => prod.productId === params.id))
        })
    }
  }, [])
  return (
    <>
      <UpdateUserNav />
      <div className="card mx-auto">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Update Product Details </h5>
          {
            Data.map(val => {
              return (
                <>
                  <div className="mb-3">
                    <label className="form-label text-light">Product Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                    value={val.productName} onChange={(e) => { }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">Product Price</label>
                    <input type="text" className="form-control" value={val.productPrice} onChange={(e) => { }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">Product Quantity</label>
                    <input type="text" className="form-control" value={val.productQuantity} onChange={(e) => { }} />
                  </div>
                  <div className="mb-3 text-center">
                    <div className="wrapper mt-3" id='template1'>
                      <div className="file-upload">
                        {
                          val.productImage ?
                            <>
                              <img src={val.productImage} alt="productImage" width="130" height="130" />
                              <input type="file" className='form-data' id="userInput" onChange={(e) => setFile(e.target.files[0])} />
                            </>
                            :
                            <>
                              <input type="file" id="userInput" onChange={(e) => setFile(e.target.files[0])} />
                            </>
                        }
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
        <div className="d-inline-flex mb-2">
          <button className="btn btn-primary w-50 mx-2">Update Details</button>
          <button className="btn btn-success w-50 mx-2">Back</button>
        </div>
      </div>
    </>
  )
}

export default UpdateProduct