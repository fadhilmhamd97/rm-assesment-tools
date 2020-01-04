import React, {useState, useEffect} from 'react';
import 
{ 
    Modal,
    ModalHeader,
    Badge,
    ModalBody,
    Button,
    ModalFooter
} from "reactstrap";

const ModalHelper = props => {
    
    //The Toggle Modal Action is defined on HOC Component

    return(<div className="modal-helper">
        <Modal isOpen={props.modalState} toggle={props.toggleModal} className={props.className} size={props.sizeModal}>
          <ModalHeader toggle={props.toggleModal}>
            {props.modalTitle}
          </ModalHeader>
          <ModalBody>
              {props.children}
          </ModalBody>
        </Modal>
    </div>)
}

export default ModalHelper;