import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props, {onClick}) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClick={onClick}/>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
