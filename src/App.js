import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import order from './assets/order.png';
import profile from './assets/profile.png';
import store from './assets/store.png';

import { Container , Menu , PageBody} from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import PrivateRouter from './components/PrivateRouter'

import MenuItem from './components/MenuItem'
import Cart from './components/Cart';


export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
       
        <Container>
            <Menu>

                <MenuItem icon={store} link="/"/>
                <MenuItem icon={order} link="/orders"/>
                <MenuItem icon={profile} link="/profile"/>
               
            </Menu>

            <PageBody>

            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>

                <PrivateRouter path="/orders">
                  
                    <div>Tela de pedidos</div>

                </PrivateRouter>

                <PrivateRouter path="/profile">
                  
                    <div>Tela de perfil</div>

                </PrivateRouter>

                <Route path="/tela2/:nome">
                    <Tela2Screen />
                </Route>
            </Switch>

            </PageBody>
            
            <Cart/>
        
        </Container>

           
        </BrowserRouter>
    );
}