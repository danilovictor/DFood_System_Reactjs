import React , {useState} from 'react';
import { CartArea , CartHeader , CartBody , CartIcon , CartText} from './styled'
import cart from '../../assets/cart.png'
import {useSelector} from 'react-redux';

const Cart = ()=>{

    const [opened , setOpened] = useState( false );

    const products = useSelector( state => state.cart.products);

    const handleClickCart = () => {
        setOpened( !opened);
    }
    
    return(
        <div>
            <CartArea>
                <CartHeader onClick={handleClickCart}>
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