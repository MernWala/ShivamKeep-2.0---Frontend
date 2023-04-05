import React from 'react'

const Alert = (props) => {

    const capitilize = (word) => {
        let temp = word;
        return temp.charAt(0).toUpperCase() + temp.slice(1);
    }
    
    return (
        props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-2 mt-1`} role="alert">
                <strong>{capitilize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert;