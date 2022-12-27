import {MdAddCircleOutline} from "react-icons/md"
import "../styles/Card.css"
const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.productImage} className="card-img-top" alt={props.productName} height={210} />
          <div className="card-body">
            <h5 className="card-title text-white fw-bold">{props.productName}</h5>
            <div className="card-text text-white mb-2">$ {props.productPrice}</div>
            <button className='btn btn-primary w-100 mx-auto'><MdAddCircleOutline size={28}/></button>
          </div>
      </div>
    </>
  )
}

export default Card