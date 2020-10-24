

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
                    <h2>Câncer Infantil</h2>
                  </header>
                   

                    <FcLike size={ 50 }></FcLike>
                    <h1>Encontre seu tratamento</h1>
                    <p className="descricao">Faça um pre diagnostico e encontre um hospital próximo</p>
             
                    <ul>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <p>Faça pré diagnostico</p>
                        </li>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <p>Agende suas consultas</p>
                        </li>
                        <li>
                            <HiCheckCircle color={'#64dfdf'}></HiCheckCircle>
                            <p>acompanhe seu tratamento</p>
                        </li>
                    </ul>
                    <button>Acesse o App</button>
                </main>

            </Container>
        </>
    )
}

export default Main;