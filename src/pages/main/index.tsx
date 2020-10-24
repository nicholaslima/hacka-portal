

import React from 'react';
import { Container } from './style';
import { FcLike } from 'react-icons/fc';
import { HiCheckCircle } from 'react-icons/hi';


const Main:React.FC = () => {
    return(
        <>
            <Container>
    
                <main>
                  
                  <header>
                    <div className="logo"></div>
                    <h2>Leões do Futuro</h2>
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
                    <button>Acesse o App</button>
                </main>

            </Container>
        </>
    )
}

export default Main;