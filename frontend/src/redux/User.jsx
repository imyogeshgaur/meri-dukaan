import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUser } from './action'

const User = ({ userData, fetchUser }) => {
    useEffect(() => {
        fetchUser()
    }, [])
    console.log(userData)
    return (
        <>

        </>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User)