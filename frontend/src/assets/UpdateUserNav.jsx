import {FiLogOut} from "react-icons/fi"
import { useNavigate } from "react-router"
import "../styles/NavBar.css"
const UpdateUserNav = () => {
    const navigate = useNavigate();
    const logoutUser = ()=>{
        localStorage.clear("jwt")
        navigate("/")
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <h3 className="text-light">Meri Dukaan</h3>
                            </li>
                        </ul>
                    </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <h3 className="text-light" onClick={logoutUser}><FiLogOut/></h3>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default UpdateUserNav