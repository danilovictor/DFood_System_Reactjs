import React from 'react';
import { CartArea , CartHeader , CartBody , CartIcon , CartText} from './styled'
import cart from '../../assets/cart.png'

const Cart = ()=>{
    return(
        <div>
            <CartArea>
                <CartHeader>
                    <CartIcon src={cart}/>
                    <CartText> Meu Carrinho ( X )</CartText>
                </CartHeader>
                <CartHeader>

                </CartHeader>
            </CartArea>
        </div>
    )
}

export default Cart;