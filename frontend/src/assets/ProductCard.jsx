import { useState } from "react"
import { MdAddCircleOutline, MdOutlineRemoveCircleOutline, MdDeleteForever } from "react-icons/md"
import { FaEdit } from "react-icons/fa";
import { useLocation } from "react-router"
import "../styles/Card.css"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProductCard = (props) => {
  const [counter, setcounter] = useState(0);
  const path = useLocation();
 
  const addItem = () => {
    if (counter === 5) {
      document.getElementById("addButton").classList.add("disabled")
      const a = toast.warn("Reached Maximum Limit !!!", {
        position: toast.POSITION.TOP_CENTER,
        closeOnClick: false,
        closeButton: false,
        style: {
          color: "rgb(236, 199, 32)",
          backgroundColor: "rgb(255, 248, 214)"
        }
      })
      if(a==1){
        setTimeout(() => {
          document.getElementById("addButton").classList.remove("disabled")
        }, 2000);
      }
    } else {
      setcounter(counter + 1)
      document.getElementById("removeButton").classList.remove("disabled")
    }
  }
  const removeItem = () => {
    if (counter === 0) {
      document.getElementById("removeButton").classList.add("disabled")
      const a = toast.warn("Reached Minimum Limit !!!", {
        position: toast.POSITION.TOP_CENTER,
        closeOnClick: false,
        closeButton: false,
        style: {
          color: "rgb(236, 199, 32)",
          backgroundColor: "rgb(255, 248, 214)"
        }
      })
      if(a==1){
        setTimeout(() => {
          document.getElementById("removeButton").classList.remove("disabled")
        }, 2000);
      }
    } else {
      setcounter(counter - 1);
    }
  }

  const addToCart = () =>{
      localStorage.setItem(props.productName,[JSON.stringify({"quantity":counter,"price":props.productPrice})]);
  }

  const removeFromCart = () =>{
    localStorage.removeItem(props.productName);
    setcounter(0)
  }
  
  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="card">
        <img src={props.productImage} className="card-img-top" alt={props.productName} height={210} />
        <div className="card-body">
          <h5 className="card-title text-white fw-bold">{props.productName}</h5>
          <div className="card-text text-white mb-2">
            {
              props.productPrice ? ` ₹ ${props.productPrice}` :``
            }
          </div>
          {
            path.pathname === "/products" ?
              <></>
              :
              <>
                <div className="card-text text-white mb-2">
                  {
                    props.productQuantity ? `${props.productQuantity}kg` :``
                  }
                </div>
              </>
          }
          <div className="d-inline-flex">
            {
              path.pathname === "/products" ?
                <></>
                :
                <div className="d-inline-flex mb-3">
                  <a className="btn btn-warning me-1" href={`/updateProduct/${props.productId}`}><FaEdit color="white" size={21} /></a>
                  <a className="btn btn-danger" href={`/deleteProduct/${props.productId}`}><MdDeleteForever color="white" size={21} /></a>
                </div>
            }
          </div>
          <div className="text-center">
            <div className="d-inline-flex">
              {
                path.pathname === "/products" ?
                  <>
                    <button className='btn btn-primary w-100' id="addButton" onClick={addItem}><MdAddCircleOutline size={28} /></button>
                    <div className="card-text text-white mx-4 mt-2 fw-bold">{counter}</div>
                    <button className='btn btn-primary w-100' id="removeButton" onClick={removeItem}><MdOutlineRemoveCircleOutline size={28} /></button>
                  </>
                  :
                  <></>
              }
            </div>
            {
                path.pathname === "/products" ?
                  <>
                  <div className="d-inline-fglex">
                    <button className='btn btn-success w-100 mt-3' id="addButton" onClick={addToCart}>Add To Cart</button>
                    <button className='btn btn-danger w-100 mt-2' id="addButton" onClick={removeFromCart}>Remove From Cart</button>
                  </div>
                  </>
                  :
                  <></>
              }
          </div>
        </div>
      </div >
    </>
  )
}

export default ProductCard