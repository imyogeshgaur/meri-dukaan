import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import UpdateUserNav from '../../assets/UpdateUserNav'
import axios from 'axios';
import { DELETE_USER_DEV, SHOW_USERS_DEV } from '../../constants/constant';
import "../../styles/UpdateProduct.css"
import { FaWindowRestore } from 'react-icons/fa';

const DeleteUser = () => {
    const token = localStorage.getItem("jwt")
    const [Data, setData] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/")
        } else {
            axios.get(SHOW_USERS_DEV, {
                headers: {
                    'authorization': token
                }
            }).then(res => {
                setData(res.data.filter(usr => usr.userId === id));
            })
        }
    }, [])

    const deleteUser = async () => {
        try {
            const res = await axios.delete(DELETE_USER_DEV + id, {
                headers: {
                    'authorization': token
                }
            })
            const data = await res.data;
            if (data.message) {
                alert(data.message)
                window.history.back()
            } else {
                console.log(data)
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
                    <h5 className="card-title text-light text-center">Delete User</h5>
                    {
                        Data.map(val => {
                            return (
                                <>
                                    <div className="mb-3">
                                        <label className="form-label text-light">User Name</label>
                                        <input type="email" className="form-control" id="formGroupExampleInput" value={val.userName} onChange={(e) => { }} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="d-inline-flex mb-2">
                    <button className="btn btn-primary w-50 mx-2" onClick={deleteUser}>Delete User</button>
                    <button className="btn btn-success w-50 mx-2" onClick={goOneStepBack}>Back</button>
                </div>
            </div>
        </>
    )
}

export default DeleteUser