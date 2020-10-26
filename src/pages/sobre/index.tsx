

import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from './style';
import { FiArrowLeft } from 'react-icons/fi';
import Image from '../../images/maos.jpg';

const Sobre:React.FC = () => {
    return(
        <>
            <Container>
                <header>
                    <div className="divLogo">
                        <div className="logo"></div>
                        <h2>Leões do Futuro</h2>
                    </div>
                    <Link to="/" className="button"><FiArrowLeft></FiArrowLeft></Link>
                </header>
                <img src={ Image } style={{ height: '275px'}} alt="imagem mãos unidas"/>
                <h1 className="titulo">Sobre Nós</h1>
                <p className="texto">O nosso projeto tem o objetivo de abastecer de dados 
                    relevantes e detalhados sobre paciêntes infantis com câncer
                    oferecer um acompanhamento para os médicos de todo histórico do paciente
                    ,atravéz de um aplicativo acessivel aos pais e aos médicos</p>
               
            </Container>
        </>
    )
}

export default Sobre;