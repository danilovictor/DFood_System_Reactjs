import React from 'react';
import { Container , ModalBody } from './styled';

const Modal = ( { children ,status } ) => {
    return (
        <div>
            <Container>
                <ModalBody>
                    {children}
                </ModalBody>
            </Container>
        </div>
    )
}

export default Modal;