

import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Main from '../pages/main';
import Sobre from '../pages/sobre';

const Routes:React.FC = () => {
    return(
        <>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sobre" exact component={Sobre} />
            </Switch>
        </>
    )
}

export default Routes;