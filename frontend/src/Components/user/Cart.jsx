import React from 'react'
import UpdateUserNav from '../../assets/UpdateUserNav'
import "../../styles/Cart.css"

const Cart = () => {
  const storage = { ...localStorage }
  delete storage.jwt
  const products = storage;
  let itemName = Object.keys(products)
  let itemQuantity = Object.values(products)
  const items = []
  for (let i = 0; i < itemName.length; i++) {
    items.push({"name":itemName[i],"detail":JSON.parse(itemQuantity[i])})
    
  }
  
  const changeProduct = () =>{
      window.location.href="products"
  }
  
  return (
    <>
    <UpdateUserNav />
    <div className="d-flex flex-column">
    {
      items.map(val=>{
        return(
          <div className="card mt-2">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label text-light">Product Name</label>
              <input type="text" className="form-control" placeholder="Enter your Email or UserName" value={val.name} disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Quantity</label>
              <input type="text" className="form-control" placeholder="Enter your Password" value={val.detail.quantity} disabled/>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Price</label>
              <input type="text" className="form-control" placeholder="Enter your Password" value={val.detail.quantity * val.detail.price} disabled/>
            </div>
            <button className="btn btn-primary" onClick={changeProduct}>Change</button>
          </div>
        </div>
        )   
      })
    }
  </div>
  <div className="d-flex flex-column" id="checkout">
   <div className="card card2">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Checkout Here</h5>
          <p className='card-text'>Grand Total : </p>
          <div className="mb-3">
            <label className="form-label text-light">Total Price</label>
            <input type="email" className="form-control" placeholder="Enter your Email or UserName"  />
          </div>
          <button className="btn btn-primary w-50 mb-4 mx-auto">Sign In</button>
        </div>
        {/* <button className="btn btn-primary w-50 mx-auto mb-4" onClick={signInUser}>Sign In</button>
        <Link style={{ color: "blue", cursor: "pointer", textDecoration: "none" }} className="mx-auto" to="/forgetPassword">Forget Password</Link>
        <p className='text-light text-center mt-2'>New To Meri Dukaan ?  <Link style={{ color: "blue", cursor: "pointer", textDecoration: "none" }} to="/signup">Sign Up Here</Link></p> */}
      </div>
   </div>
</>
)
}

export default Cart