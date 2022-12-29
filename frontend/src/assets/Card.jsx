import { useState } from "react"
import { MdAddCircleOutline, MdOutlineRemoveCircleOutline } from "react-icons/md"
import { useLocation } from "react-router"
import "../styles/Card.css"

const Card = (props) => {
  const [counter, setcounter] = useState(0);

  const path = useLocation();

  const addItem = () => {
    if (counter === 5) {
      document.getElementById("addButton").classList.add("disabled")
      alert("Reached Maximum Limit !!!");
    } else {
      setcounter(counter + 1)

      //Todo : Add Items in localStorage
     
      document.getElementById("removeButton").classList.remove("disabled")
    }
  }
  const removeItem = () => {
    if (counter === 0) {
      document.getElementById("removeButton").classList.add("disabled")
    } else {
      setcounter(counter - 1);
    }
  }
  const addItemVendor = () => {
    setcounter(counter + 1)
    document.getElementById("removeButton").classList.remove("disabled")
  }
  const removeItemVendor = () => {
    if (counter === 0) {
      document.getElementById("removeButton").classList.add("disabled")
    } else {
      setcounter(counter - 1);
    }
  }
  return (
    <>
      <div className="card">
        <img src={props.productImage} className="card-img-top" alt={props.productName} height={210} />
        <div className="card-body">
          <h5 className="card-title text-white fw-bold">{props.productName}</h5>
          <div className="card-text text-white mb-2">$ {props.productPrice}</div>
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
                  <>
                    <button className='btn btn-primary w-100' id="addButton" onClick={addItemVendor}><MdAddCircleOutline size={28} /></button>
                    <div className="card-text text-white mx-4 mt-2 fw-bold">{props.productQuantity}kg</div>
                    <button className='btn btn-primary w-100' id="removeButton" onClick={removeItemVendor}><MdOutlineRemoveCircleOutline size={28} /></button>
                  </>
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Card