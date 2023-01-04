import "../../styles/AddProduct.css"
import NavBar from '../../assets/NavBar'
import Alert from '../../assets/Alert';
import { useEffect, useState } from 'react'
import axios from "axios";
import { ADD_PRODUCT_DEV, DECODE_USER_DEV } from '../../constants/constant'

const AddProduct = () => {
  const token = localStorage.getItem("jwt")
  const [Data, setData] = useState("")
  const [file, setFile] = useState("")
  const [productName, setProductName] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [alert, setalert] = useState(null)

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
          setData(res.data)
        }
      })
    }
  }, [])

  const addProduct = async () => {
    const regx = /^\d+$/
    if (!productName || !productPrice || !productQuantity || !file) {
      setalert({
        msg: "Please Enter all Fields !!!",
        type: "danger"
      })
      setTimeout(() => {
        setalert(null)
      }, 1000);
    } else if ((!regx.test(productPrice)) || !regx.test(productQuantity)) {
      setalert({
        msg: "Product Price and Quantity should be an Integer !!!",
        type: "danger"
      })
      setTimeout(() => {
        setalert(null)
      }, 1000);
    }
    else {
      try {
        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("productQuantity", productQuantity);
        formData.append("productPrice", productPrice);
        formData.append("productImage", file)

        const response = await axios({
          baseURL: ADD_PRODUCT_DEV,
          method: 'POST',
          headers: {
            'authorization': token
          },
          data: formData
        })
        const data = await response.data;
        if (data) {
          setalert({
            msg: "Product Added Sucessfully !!!",
            type: "success"
          })
          setTimeout(() => {
            setalert(null)
          }, 1000);
          setProductName("")
          setProductPrice("")
          setProductQuantity("")
          setFile("")
        }
      } catch (error) {
        console.log(error)
        setalert({
          msg: "Network Error !!!",
          type: "danger"
        })
        setTimeout(() => {
          setalert(null)
          window.location.href = "vendorProducts"
        }, 1000);
      }
    }
  }
  const goToVendorProfile = () => {
    window.location.href = "vendor"
  }
  return (
    <>
      <NavBar userName={Data.userName ? Data.userName : Data.firstName} />
      <Alert alert={alert}/>
      <div className="card mx-auto">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Add Product</h5>
          <div className="mb-3">
            <label className="form-label text-light">Product Title</label>
            <input type="text" className="form-control" placeholder="Enter your Product Title" value={productName} onChange={(e) => setProductName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Product Price</label>
            <input type="text" className="form-control" placeholder="Enter your Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Product Quantity</label>
            <input type="text" className="form-control" placeholder="Enter your Product Quantity" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Product Image</label>
            <input type="file" className="form-control" placeholder="Enter your Product Quantity" onChange={(e) => setFile(e.target.files[0])} />
          </div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4" onClick={addProduct}>Add Product</button>
        <button className="btn btn-success w-50 mx-auto mb-4" onClick={goToVendorProfile}>View Profile</button>
      </div>
    </>
  )
}

export default AddProduct