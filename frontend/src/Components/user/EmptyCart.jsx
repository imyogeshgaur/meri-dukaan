import React from 'react'
import UpdateUserNav from '../../assets/UpdateUserNav'
import "../../styles/EmptyCart.css"

const EmptyCart = () => {
    const goBackToProducts = ()=>{
        location.href = "/products"
    }
    return (
        <>
            <UpdateUserNav />
            <div className="card mx-auto">
                <div className="card-body">
                    <h1 className="card-title text-light text-center">No Item In Cart !!!</h1>
                    <div style={{ width: "100%", height: 0, paddingBottom: "56%", position: "relative" }}><iframe src="https://giphy.com/embed/giXLnhxp60zEEIkq8K" width="100%" height="100%" style={{ position: "absolute" }} className="giphy-embed" allowFullScreen></iframe></div>
                </div>
                <button className="btn btn-success w-50 mx-auto mb-4" onClick={goBackToProducts}>Back To Products</button>
            </div>
        </>
    )
}

export default EmptyCart