import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import Alert from '../../assets/Alert'
import UpdateUserNav from '../../assets/UpdateUserNav'
import { DELETE_PRODUCT_DEV, GET_A_PRODUCT_DEV } from '../../constants/constant'
import "../../styles/UpdateProduct.css"

const DeleteProduct = () => {
  const token = localStorage.getItem("jwt")
  const [name, setName] = useState("")
  const [alert, setalert] = useState(null)
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
        setalert({
          msg: data.message,
          type: "success"
        })
        setTimeout(() => {
          setalert(null)
          window.history.back();
        }, 1000);
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
    window.history.back();
  }

  return (
    <>
      <UpdateUserNav />
      <Alert alert={alert} />
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
    </>
  )
}

export default DeleteProduct