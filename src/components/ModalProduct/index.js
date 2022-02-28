import React from 'react';
import { Container , ProductPhoto , ProductInfoArea , ProductDetails , ProductQuantilyArea , ProductArea , ProductButton} from './styled'

const ModalProduct = () => {
    return (
        <div>
            <Container>
                <ProductArea>
                    <ProductPhoto src=""/>
                    <ProductInfoArea>
                        <ProductDetails>

                        </ProductDetails>
                        <ProductQuantilyArea>

                        </ProductQuantilyArea>
                    </ProductInfoArea>
                </ProductArea>

                <ProductButton>

                </ProductButton>
            </Container>
        </div>
    )
}

export default ModalProduct;