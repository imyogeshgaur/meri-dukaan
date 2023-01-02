import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import UpdateUserNav from '../../assets/UpdateUserNav'
import { DELETE_PRODUCT_DEV, GET_A_PRODUCT_DEV } from '../../constants/constant'
import "../../styles/UpdateProduct.css"

const DeleteProduct = () => {
  const token = localStorage.getItem("jwt")
  const [name, setName] = useState("")
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/")
    } else {
      axios.get(GET_A_PRODUCT_DEV+id, {
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
      // const res = await axios({
      //   baseURL:DELETE_PRODUCT_DEV,
      //   method:'DELETE',
      //   headers:{
      //     'authorization': token
      //   },
      //   data:id
      // })
      const res = await axios.delete(DELETE_PRODUCT_DEV+id,{
        headers:{
          'authorization': token
        },
      })
      const data = await res.data;
      if (data.message) {
        alert(data.message)
        window.history.back();
      }
    } catch (error) {
      console.log(error)
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
    </>
  )
}

export default DeleteProduct