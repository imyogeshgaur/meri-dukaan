import { useState, useEffect } from 'react'
import UpdateUserNav from '../../assets/UpdateUserNav'
import "../../styles/Cart.css"

const Cart = () => {
  const [checkout, setcheckout] = useState("")
  const storage = { ...localStorage }
  delete storage.jwt
  const products = storage;
  let itemName = Object.keys(products)
  let itemQuantity = Object.values(products)
  const items = []
  for (let i = 0; i < itemName.length; i++) {
    items.push({ "name": itemName[i], "detail": JSON.parse(itemQuantity[i]) })

  }
  useEffect(() => {
    if (JSON.stringify(products) === '{}') {
      location.href = "/emptyCart"
    }
    const quant = items.map(item => item.detail.quantity)
    const pri = items.map(item => item.detail.price)
    var array = [];
    for (let i = 0; i < quant.length; i++) {
      array[i] = quant[i] * pri[i];
    }
    setcheckout(array.reduce((a, b) => a + b))
  }, [])

  const changeProduct = () => {
    window.location.href = "products"
  }


  return (
    <>
      <UpdateUserNav />
      <div className="card2">
        <div className="card-body">
          <h5 className="card-title text-light text-center">Checkout Here</h5>
          <div className="mb-3">
            <label className="form-label text-light">Grand Total </label>
            <input type="email" className="form-control" value={`₹ ${checkout}`} />
          </div>
          <button className="btn btn-success w-50 mb-4 mx-auto">Checkout</button>
        </div>
      </div>
      <div className="d-flex flex-column">
        {
          items.map(val => {
            return (
              <div className="card mt-2">
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label text-light">Product Name</label>
                    <input type="text" className="form-control" placeholder="Enter your Email or UserName" value={val.name} onChange={(e) => setname(e.target.value)} disabled />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">Quantity</label>
                    <input type="text" className="form-control" placeholder="Enter your Password" value={val.detail.quantity} onChange={(e) => setquantity(e.target.value)} disabled />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">Price</label>
                    <input type="text" className="form-control" placeholder="Enter your Password" value={`₹ ${val.detail.quantity * val.detail.price}`} onChange={(e) => setprice(e.target.value)} disabled />
                  </div>
                  <button className="btn btn-primary" onClick={changeProduct}>Change</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cart