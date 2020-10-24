

import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Main from '../pages/main';
import Cadastro from '../pages/cadastroPaciente';
import Ficha from '../pages/fichaPaciente';
import Avaliacao from '../pages/avaliacao';


const Routes:React.FC = () => {
    return(
        <>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/register" component={Cadastro} />
                <Route path="/avaliacao" component={Avaliacao} />
                <Route path="/ficha" component={Ficha} />
            </Switch>
        </>
    )
}

export default Routes;