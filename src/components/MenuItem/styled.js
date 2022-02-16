import styled from "styled-components";

export const LinkArea = styled.a`
display:flex;
justify-content:center;
align-items:center;
width:60px;
height:60px;
background-color:${props => props.active ? '#FF0000' : 'transparent'};
border-radius:9px;
margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
width:34px;
height:34px;

`;