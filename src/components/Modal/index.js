import React from 'react';
import { Container , ModalBody } from './styled';

const Modal = ( { children ,status , setStatus } ) => {

    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBg')){
          setStatus(false);
        };
    }

    return (
        <div>
            <Container className="modalBg" onClick={handleModalClick} status={status}>
                <ModalBody>
                    {children}
                </ModalBody>
            </Container>
        </div>
    )
}

export default Modal;