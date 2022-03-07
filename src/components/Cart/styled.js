import styled from 'styled-components';

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position:fixed;
    bottom:0;
    right:30px;
`;

export const CartHeader = styled.div`
    height:30px;
    width: 290px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
`;


export const CartBody = styled.div`
    display:${props => props.opened ? 'block' : 'none'};
    color:#FFF;


`;

export const CartIcon = styled.img`
    width:23px;
    height: auto;
    margin-left:10px;
    margin-right:10px;
`;

export const CartText = styled.div`
    color:white;
    font-size:17px;
    flex:1;
`;

export const CartDown = styled.img`


`;

export const ProductsArea = styled.div`
`;

export const ProductItem = styled.div`
    display:flex ;
    margin:10px;

`;

export const ProductPhoto = styled.img`
    width:64px ;
    height:auto;
    border-radius:6px;
`

export const ProductName = styled.div`
    font-size:15px;
    font-weight:bold ;
`;

export const ProductPrice = styled.div`
`;

export const ProductInfoArea = styled.div`
    flex:1;
    margin-left:10px;
`;

export const ProductQuantilyArea = styled.div`
    display:flex;
    align-items:center;
`;

export const ProductQtIcon = styled.img`
    width:13px;
    height: auto;
    cursor:pointer;
`;

export const ProductQtText = styled.div`
    font-size:13px;
    font-weight:bold;
    margin: 0px 5px;
`;



