import React , {useState} from 'react';
import { Container , Logo , SearchInput } from './styled'

import logo from '../../assets/logo.png'

const Header = ( {search , onSearch})=>{

    const [inputActive , setInputActive] = useState(false);
    
   const handleInputBlur = ()=>{
       setInputActive(false);

    };

    const handleInputFocus = ()=>{
        setInputActive(true);

    };

    const handleChange = (e)=>{
        onSearch(e.target.value);
    };

    return (
        <div>
            <Container>
              <Logo src={logo}/>
              <SearchInput type="text" placeholder="Digite o seu produto" value={search} onchange={handleChange} active={inputActive} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
            </Container>
        </div>
    )
};

export default Header;