import React from 'react';
import { useHistory , useLocation } from 'react-router-dom';
import { LinkArea , LinkIcon} from './styled.js'

const MenuItem = ({icon , link})=>{

    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname == link;

    const handleClickDefault = (e)=>{
        e.preventDefault();
        history.push(link);
    }

    return(
    
    <div>
        <LinkArea active={isActive} href={link} onClick={handleClickDefault}>

            <LinkIcon src={icon}/>

            <p></p>
        
        </LinkArea>
    </div>
    
)
}

export default MenuItem;