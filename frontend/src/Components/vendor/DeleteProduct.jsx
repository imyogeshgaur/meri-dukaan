import axios from 'axios'
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router'
import UpdateUserNav from '../../assets/UpdateUserNav'
import { DELETE_PRODUCT_DEV, GET_A_PRODUCT_DEV } from '../../constants/constant'
import "../../styles/UpdateProduct.css"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const DeleteProduct = () => {
  const token = localStorage.getItem("jwt")
  const [name, setName] = useState("")
  const { id } = useParams();

  useEffect(() => {
    if (!token) {
      window.location.href = "/"
    } else {
      axios.get(GET_A_PRODUCT_DEV + id, {
        headers: {
          'authorization': token
        }
      }).then(res => {
        setName(res.data.productName)
      })
    }
  }, [])

  const deleteProduct = async () => {
    try {
      const res = await axios.delete(DELETE_PRODUCT_DEV + id, {
        headers: {
          'authorization': token
        },
      })
      const data = await res.data;
      if (data.message) {
        if (data.message === "Product Deleted !!!") {
          const a = toast.success(data.message, {
            position: toast.POSITION.TOP_CENTER,
            closeOnClick: false,
            closeButton: false,
            style: {
              color: "green",
              backgroundColor: "rgb(183, 248, 183)"
            }
          })
          if (a == 1) {
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        } else {
          const a = toast.error(data.message, {
            position: toast.POSITION.TOP_CENTER,
            closeOnClick: false,
            closeButton: false,
            style: {
              color: "red",
              backgroundColor: "rgb(255, 206, 206)"
            }
          })
          if (a == 1) {
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        }
      }
    } catch (error) {
      console.log(error)
      const a = toast.error("Network Error !!!", {
        position: toast.POSITION.TOP_CENTER,
        closeOnClick: false,
        closeButton: false,
        style: {
          color: "red",
          backgroundColor: "rgb(255, 206, 206)"
        }
      })
      if (a == 1) {
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      }
    }
  }

  const goOneStepBack = () => {
    window.history.back();
  }

  return (
    <>
      <UpdateUserNav />
      <div className="card mx-auto">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Delete Product</h5>
          <div className="mb-3">
            <label className="form-label text-light">Product Name</label>
            <input type="email" className="form-control" id="formGroupExampleInput" value={name} onChange={(e) => { }} />
          </div>
        </div>
        <div className="d-inline-flex mb-2">
          <button className="btn btn-primary w-50 mx-2" onClick={deleteProduct}>Delete Product</button>
          <button className="btn btn-success w-50 mx-2" onClick={goOneStepBack}>Back</button>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  )
}

export default DeleteProduct