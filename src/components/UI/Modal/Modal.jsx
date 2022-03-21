import React from 'react';
import classes from './Modal.css';
import Aus from '../../../hoc/Aus';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <Aus>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aus>
);

export default Modal;