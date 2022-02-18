import styled from 'styled-components';
import search from '../../assets/search.png'

export const Container = styled.div`
background-color:#136713;
border-radius: 4px;
padding: 20px;
display:flex;
justify-content:space-between;
align-items: center;
`;

export const Logo = styled.img`
 width: auto;
 height:65px;
`;

export const SearchInput = styled.input`
border:0;
border-radius: 25px;
width: ${props => props.active ? 300 : 0}px;
height:50px;
background-color:white;
background-image:url(${search});
background-repeat:no-repeat;
background-size:30px;
background-position: 13px center;
outline:0;
padding-left: 50px;
transition: all ease .3s;
cursor:pointer;
font-size:15px;

    &:focus{
        cursor:text;
    }



`;