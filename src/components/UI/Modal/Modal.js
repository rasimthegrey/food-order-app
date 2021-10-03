
import { createPortal } from 'react-dom'
import { Fragment } from 'react/cjs/react.development'

import classes from './Modal.module.css'

const Backdrop = props => {
    return(
        <div className={classes.backdrop} onClick={props.onClose} />
    )
}

const ModalOverlay = props => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portal = document.getElementById('overlays')

const Modal = props => {
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose}/>, portal)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </Fragment>
    )
}

export default Modal
