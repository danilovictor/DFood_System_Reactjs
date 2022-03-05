import React from 'react';
import { Container , ProductPhotoArea , ProductPhoto , ProductInfoArea , ProductButtonArea , ProductName,
        ProductPrice , ProductIngridentes , ProductButton } from './styled'

import next from '../../assets/next.png'

const ProductItem = ({data , onClick})=> {

    const handleClick = () => {
        onClick(data);
    }

    return (
        <div>
            <Container onClick={handleClick}>
                <ProductPhotoArea>
                    <ProductPhoto src={data.image}/>
                </ProductPhotoArea>
                    <ProductInfoArea>
                    <ProductName>{data.name}</ProductName>
                    <ProductPrice> R${data.price}</ProductPrice>
                    <ProductIngridentes>{data.ingredients}</ProductIngridentes>
                    </ProductInfoArea>
                    <ProductButtonArea>
                        <ProductButton src={next} />
                    </ProductButtonArea>
               
            </Container>
        </div>
    )
}

 export default ProductItem;