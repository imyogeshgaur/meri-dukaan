import { useState } from "react"
import { MdAddCircleOutline, MdOutlineRemoveCircleOutline, MdDeleteForever } from "react-icons/md"
import { FaEdit } from "react-icons/fa";
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
          <div className="d-inline-flex">
            {
              path.pathname === "/products" ?
                ""
                :
                <div className="d-inline-flex mb-3">
                  <button className="btn btn-warning me-1" data-bs-toggle="modal" data-bs-target="#exampleModal"><FaEdit color="white" size={21} /></button>
                  <button className="btn btn-danger"><MdDeleteForever color="white" size={21} /></button>
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
      {/* Modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Edit Details</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="" value={props.productName}/>
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="" value={props.productPrice}/>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <input type="text" class="form-control" placeholder="" value={props.productQuantity}/>
                </div>
                <div class="col">
                  <input type="file" class="form-control" placeholder="" value={props.productimage}/>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card