import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 900;
    background-color: rgba( 0 , 0 , 0,  0.7);
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    background-color:white;
    width: 300px;
    height: 300px;

`;