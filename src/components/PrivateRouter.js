import React from 'react';
import { Route , useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux'; 

const PrivateRouter = ({children , ...rest}) =>{

    const history = useHistory();

    const token = useSelector(state => state.user.token);

    alert("token" + token)

    if(token == ''){
        history.push("/login");
        return null;
    }

    return (
        
        <Route {...rest}> {children}</Route>
    )
    
    
}
export default PrivateRouter;