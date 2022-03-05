import styled from 'styled-components';

export const Container = styled.div`
    width: 740px;
    padding: 10px;

`;

export const ProductArea = styled.div`
    height:100px;
    /* background-color: red; */
    display:flex;
`;

export const ProductPhoto = styled.img`
  width: 310px ;
  border-radius:10px;

`;

export const ProductInfoArea = styled.div`
    flex:1;
    /* background-color:blue; */
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    margin-left: 10px;
`;

export const ProductDetails = styled.div`


`;

export const ProductQuantilyArea = styled.div`
    height: 50px;
    /* background-color:gray; */
    display: flex;
    justify-content:space-between;
`;

export const ProductQuantily = styled.div`
    display: flex;
    align-items:center;
    background-color:#136713;
`;

export const ProductPrice = styled.div`
    font-size:30px;
    font-weight:bold;

`;

export const ProductQtImage = styled.img`
    width: 24px;
    height: 24px;
    padding: 10px;
    cursor:pointer;
`;

export const ProductQtText = styled.div`
    font-size:25px;
    font-weight:bold;
    color:#FFF;
`;

export const ProductButtons = styled.div`
    height: 50px ;
    display: flex;
    justify-content: flex-end;
`;

export const ProductButton = styled.div`
    border-radius:10px;
    background-color:#073c07;
    color:#FFF;
    font-size:22px;
    font-weight:bold;
    padding:10px 20px;
    margin-top: 5px;
    margin-left: 10px;
    cursor:pointer;
    

`;

export const ProductIngridentes = styled.div`
    font-size:14px;

`;

export const ProductName = styled.div`
    font-size:20px;
    font-weight:bold;
    background-color:#136713;
    
`;

