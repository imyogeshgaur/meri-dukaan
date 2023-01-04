import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import "../../styles/UpdateProduct.css"
import { GET_A_PRODUCT_DEV, UPDATE_PRODUCT_DEV } from '../../constants/constant';
import UpdateUserNav from '../../assets/UpdateUserNav';
import Alert from '../../assets/Alert';

const UpdateProduct = () => {
  const token = localStorage.getItem("jwt")
  const [file, setFile] = useState("")
  const [productId, setproductId] = useState([])
  const [productName, setProductName] = useState([])
  const [productQuantity, setProductQuantity] = useState([])
  const [productPrice, setProductPrice] = useState([])
  const { id } = useParams();
  const [alert, setalert] = useState(null)

  useEffect(() => {
    if (!token) {
      window.location.href = "/"
    } else {
      axios.get(GET_A_PRODUCT_DEV + id, {
        headers: {
          'authorization': token
        }
      })
        .then(res => {
          setproductId(res.data.productId)
          setProductName(res.data.productName)
          setProductPrice(res.data.productPrice)
          setProductQuantity(res.data.productQuantity)
          setFile(res.data.productImage)
        })
    }
  }, [])

  const updateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("productId", productId)
      formData.append("productName", productName)
      formData.append("productPrice", productPrice)
      formData.append("productQuantity", productQuantity)
      formData.append("productImage", file)

      const res = await axios({
        baseURL: UPDATE_PRODUCT_DEV,
        method: 'PUT',
        headers: {
          'authorization': token
        },
        data: formData
      })
      const data = await res.data;
      if (data.message === "Product Details Updated !!!") {
        setalert({
          msg: data.message,
          type: "success"
        })
        setTimeout(() => {
          setalert(null)
          window.location.reload()
        }, 1000);
      } else {
        setalert({
          msg: data.message,
          type: "danger"
        })
        setTimeout(() => {
          setalert(null)
        }, 1000);
        window.location.reload()
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
  const goOneStepBack = () => {
    window.history.back()
  }
  return (
    <>
      <UpdateUserNav />
      <Alert alert={alert} />
      <div className="card mx-auto">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Update Product Details </h5>
          <div className="mb-3">
            <label className="form-label text-light">Product Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput"
              value={productName} onChange={(e) => setProductName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Product Price (in USD)</label>
            <input type="text" className="form-control" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Product Quantity (in Kg)</label>
            <input type="text" className="form-control" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
          </div>
          <div className="mb-3 text-center">
            <div className="wrapper mt-3" id='template1'>
              <div className="file-upload">
                {
                  file ?
                    <>
                      <img src={file} alt="productImage" width="130" height="130" />
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
        </div>
        <div className="d-inline-flex mb-2">
          <button className="btn btn-primary w-50 mx-2" onClick={updateProduct}>Update Details</button>
          <button className="btn btn-success w-50 mx-2" onClick={goOneStepBack}>Back</button>
        </div>
      </div>
    </>
  )
}

export default UpdateProduct