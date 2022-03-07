import React , {useState} from 'react';
import { CartArea , CartHeader , CartBody , CartIcon , CartText , CartDown , ProductsArea , ProductItem , ProductPhoto,
 ProductName , ProductPrice , ProductInfoArea , ProductQuantilyArea , ProductQtIcon , ProductQtText} from './styled'
import {useSelector , useDispatch} from 'react-redux';

import cart from '../../assets/cart.png';
import down from '../../assets/down.png';

import minus from '../../assets/minus.png'
import plus from '../../assets/plus.png'


const Cart = ()=>{

    const [opened , setOpened] = useState( true );

    const dispatch = useDispatch();

    const products = useSelector( state => state.cart.products);

    const handleClickCart = () => {
        setOpened( !opened);
    }

    const handleProductChange = (key , type) => {
        alert(key + " = " + type);
        dispatch({
            type:'CHANGE_PRODUCT',
            payload : {
                key , type
            }
        })
    }
    
    return(
        <div>
            <CartArea>
                <CartHeader onClick={handleClickCart}>
                    <CartIcon src={cart}/>
                    <CartText> Meu Carrinho ({ products.length} )</CartText>
                   
                    {opened && 
                        <CartIcon src={down}/>
                    }
                </CartHeader>
                   
                    <CartBody opened={opened}>
                       <ProductsArea>

                        {products.map((item , index) =>(

                                <ProductItem key={index}>
                                <ProductPhoto src={item.image}/>
                                <ProductInfoArea>
                                    <ProductName> {item.name} </ProductName>
                                    <ProductPrice> {item.price.toFixed(2)} </ProductPrice>
                                </ProductInfoArea>
                                <ProductQuantilyArea>
                                    <ProductQtIcon onClick={()=> handleProductChange(index , '-')} src={minus}/>
                                    <ProductQtText> {item.quantily}</ProductQtText>
                                    <ProductQtIcon onClick={()=> handleProductChange(index , '+')} src={plus}/>

                                </ProductQuantilyArea>
                                </ProductItem>

                        ))}

                          
                       </ProductsArea>
                    </CartBody>
                
            </CartArea>
        </div>
    )
}

export default Cart;