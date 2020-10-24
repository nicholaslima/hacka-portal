

import React from 'react';
import { Container } from './style';
import { FcLike } from 'react-icons/fc';
import { HiCheckCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Main:React.FC = () => {
    return(
        <>
            <Container>
    
                <main>
                  
                  <header>
                    <div className="divLogo">
                        <div className="logo"></div>
                        <h2>Leões do Futuro</h2>
                    </div>
                    <Link to="" className="">Sobre</Link>
                  </header>
                   

                    <FcLike size={ 50 }></FcLike>
                    <h1>Encontre seu tratamento</h1>
                    <p className="descricao">Faça um pré diagnóstico e encontre um hospital próximo</p>
             
                    <ul>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <p>Faça um pré diagnostico</p>
                        </li>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <p>Agende suas consultas</p>
                        </li>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <p>Acompanhe seu tratamento</p>
                        </li>
                    </ul>
                    <Link to="" className="button">Acesse o App</Link>
                </main>

            </Container>
        </>
    )
}

export default Main;