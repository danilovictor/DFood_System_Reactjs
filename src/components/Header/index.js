import React from 'react';
import { Container , Logo , SearchInput } from './styled'

import logo from '../../assets/logo.png'

const Header = ()=>{
    return (
        <div>
            <Container>
              <Logo src={logo}/>
              <SearchInput type="text" placeholder="Digite o seu produto"/>
            </Container>
        </div>
    )
};

export default Header;