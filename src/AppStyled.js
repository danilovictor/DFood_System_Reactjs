import styled from 'styled-components';
import bg from './assets/bg.png'

export const Container = styled.div`
display:flex;
height:100vh;
background-color:red;
`;

export const Menu = styled.div`
display:flex;
width:80px;
background-color:#136713;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const PageBody = styled.div`
display:flex;
flex:1;
background:url(${bg});
background-color: #00980d;
`;