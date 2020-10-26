

import React from 'react';
import { Container } from './style';
import { FcLike } from 'react-icons/fc';
import { HiCheckCircle } from 'react-icons/hi';

import { AiFillAndroid } from 'react-icons/ai';

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
                    <Link to="/sobre" className="">Sobre</Link>
                  </header>
                   
    

                    <FcLike size={ 50 }></FcLike>
                    <h1>Encontre seu tratamento de câncer</h1>
                    <p className="descricao">Faça um pré diagnóstico e encontre um hospital próximo</p>
             
                    <ul>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <Link to="/">Faça um pré diagnóstico</Link>
                        </li>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <Link to="/">Agende seus exames</Link>
                        </li>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <Link to="/">Acompanhe seu tratamento</Link>
                        </li>
                    </ul>
                    <Link to="" className="button-App"><AiFillAndroid size={ 30 }></AiFillAndroid>  Baixe o App</Link>
                </main>

            </Container>
        </>
    )
}

export default Main;