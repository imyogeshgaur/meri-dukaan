import React from 'react'

const Alert = (props) => {
    return (
        <div style={{ height: '2px' }} className="container">
            {props.alert && <div className={` my-1 alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}

export default Alert