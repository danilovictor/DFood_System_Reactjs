import React , {useState , useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Container , ProductPhoto , ProductInfoArea , ProductDetails , ProductQuantilyArea , ProductQuantily, ProductQtImage, ProductQtText, ProductPrice , ProductArea , ProductButtons , ProductButton , ProductName , ProductIngridentes} from './styled'
import minus from '../../assets/minus.png';
import plus from '../../assets/plus.png'; 


const ModalProduct = ({ data , setStatus }) => {

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleMinusQt = () => {
       if (quantily > 2){
           setQuantily( quantily - 1 );
       }
    }

    const handlePlusQt = () => {
        setQuantily( quantily + 1);
    }

    const handleAddToCart = () => {
        
        dispatch({

            type: 'ADD_PRODUCT',
            payload : { data,quantily }

        })
        
        setStatus(false);
    }


    const [quantily , setQuantily] = useState(1)

    useEffect(() => {
        setQuantily(1)
    }, [data])

    const dispatch = useDispatch();

    return (
        <div>
            <Container>
                <ProductArea>
                    <ProductPhoto src={data.image}/>
                    <ProductInfoArea>
                        <ProductDetails>
                            <ProductName>{data.name}</ProductName>
                            <ProductIngridentes>{data.ingredients}</ProductIngridentes>

                        </ProductDetails>
                        <ProductQuantilyArea>
                            <ProductQuantily>
                                <ProductQtImage onclick={handleMinusQt} src={minus}/>
                                    <ProductQtText> {quantily} </ProductQtText>
                                <ProductQtImage onClick={handlePlusQt} src={plus}/>
                            </ProductQuantily>
                            <ProductPrice>
                                R$ {(data.price * quantily).toFixed(2)}
                            </ProductPrice>
                        </ProductQuantilyArea>
                    </ProductInfoArea>
                </ProductArea>

                <ProductButtons>
                   
                    <ProductButton onClick={handleCancelButton}>Cancelar</ProductButton>
                    <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
               
                </ProductButtons>
            </Container>
        </div>
    )
}

export default ModalProduct;