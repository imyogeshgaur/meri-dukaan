import "../../styles/AddProduct.css"
import NavBar from '../../assets/NavBar'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/")
    } else {
      axios.post(DECODE_USER_DEV, "", {
        headers: {
          'authorization': token
        }
      }).then(res => {
        if (res.data.role === "user") {
          navigate("/unauthorized")
        } else {
          setData(res.data)
        }
      })
    }
  }, [])

  const addProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("productQuantity", productQuantity);
      formData.append("productPrice", productPrice);
      formData.append("productImage", file)
      const response = await fetch(ADD_PRODUCT_DEV, {
        method: "POST",
        mode: 'cors',
        headers: {
          "authorization": token
        },
        body: formData
      })
      const data = await response.json();
      if (data) {
        alert("Product Added Sucessfully !!!")
        setProductName("")
        setProductPrice("")
        setProductQuantity("")
        setFile("")
      } else {
        alert(data);
      }
    } catch (error) {
      console.log(error)
    }
  }
  const goToVendorProfile = ()=>{
    window.location.href = "vendor"
  }
  return (
    <>
      <NavBar userName={Data.userName ? Data.userName : Data.firstName}/>
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