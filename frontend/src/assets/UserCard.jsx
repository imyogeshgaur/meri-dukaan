import { useLocation } from "react-router"
import "../styles/Card.css"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import defaultImage from "./default.jpg"
const UserCard = (props) => {
    const path = useLocation();
    return (
        <>
            <div className="card">
                <img src={props.userImage ? props.userImage : defaultImage} className="card-img-top" alt="UserImg" height={210} />
                <div className="card-body">
                    <h5 className="card-title text-white fw-bold">{props.userName}</h5>
                    <div className="card-text text-white mb-2">{props.email}</div>
                    <div className="card-text text-white mb-2">{props.role}</div>
                    <div className="d-inline-flex">
                        {
                            path.pathname === "/products" ?
                                ""
                                :
                                <div className="d-inline-flex mb-3">
                                    <a className="btn btn-warning me-1" href={`/updateUser/${props.userId}`}><FaEdit color="white" size={21} /></a>
                                    <a className="btn btn-danger" href={`/deleteUser/${props.userId}`}><MdDeleteForever color="white" size={21} /></a>
                                </div>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default UserCard