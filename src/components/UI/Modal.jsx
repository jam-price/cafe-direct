import React from 'react'
import classes from './Modal.module.css'

const Modal = () => {
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                Dummy text
            </div>
            
        </div>
    )
}

export default Modal
