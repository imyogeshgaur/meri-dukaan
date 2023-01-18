import { FETCH_SUCCESS_STATE,FETCH_FAILURE_STATE } from "./actionType";
import {SHOW_USERS_DEV} from "../constants/constant"
import axios from "axios";

export const fetchUser = ()=>{
    return (dispatch)=>{
        const token = localStorage.getItem("jwt");
        axios.get(SHOW_USERS_DEV,{
            headers:{
            'authorization':token
            }
        })
        .then(res=>{
            const users = res.data;
            dispatch(successState(users))
        })
        .catch(err=>{
            dispatch(failureState(err.message))
        })
    }
}

export const successState  = (data)=>{
    return {
        type:FETCH_SUCCESS_STATE,
        payload:data
    }
}

export const failureState = (error)=>{
    return {
        type:FETCH_FAILURE_STATE,
        payload:error
    }
}