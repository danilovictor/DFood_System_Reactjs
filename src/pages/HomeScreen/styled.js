import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    padding:15px;
`;

export const Titulo = styled.h1`

`;

export const CategoryArea = styled.div`
    color:#FFF;
    margin-top:20px;

`;

export const CategoryList = styled.div`
    display:flex;
    margin-top:20px;
`;

export const ProductArea = styled.div`
    margin-top:20px;
    margin-bottom:10px;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat( 3,1fr) ;
    grid-gap:16px;
`;

export const ProductPaginationArea = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

export const ProductPaginationItem = styled.div`
    background-color:#FFF;
    padding:5px 10px ;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.16);
    cursor:pointer;
`;