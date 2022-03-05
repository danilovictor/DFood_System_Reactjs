import React , {useState} from 'react';
import { CartArea , CartHeader , CartBody , CartIcon , CartText , CartBody} from './styled'
import cart from '../../assets/cart.png'
import {useSelector} from 'react-redux';

const Cart = ()=>{

    const [opened , setOpened] = useState( false );

    const products = useSelector( state => state.cart.products);
    
    return(
        <div>
            <CartArea>
                <CartHeader>
                    <CartIcon src={cart}/>
                    <CartText> Meu Carrinho ({ products.length} )</CartText>
                </CartHeader>
                <CartHeader>
                    <CartBody opened={opened}>

                    </CartBody>
                </CartHeader>
            </CartArea>
        </div>
    )
}

export default Cart;