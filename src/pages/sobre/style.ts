

import styled from 'styled-components';
import Logo from '../../images/LOGO-03.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    .logo{
        background-image: url(${ Logo });
        background-repeat: no-repeat;
        background-size: cover;
        width: 100px;
        height: 100px;
    }

    header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            margin-bottom: 25px;
            .divLogo{
                display: flex;
                flex-direction: row;
                width: 100%;
                align-items: center;
            }
            h2{
                margin: 20px;
                font-weight: 800;
                color:black;
                box-shadow: 0 2;
    
            }
        }
        .titulo{
            margin-top: 15px;
            color: black;
            font-size: 56px;
            font-weight: 800;
        }

        .texto{
            margin-top: 15px;
            line-height: 31px;
            font-weight: 200;
            font-size: 20px;
            color: black;
            margin-bottom: 35px;
        }

        margin: 0 auto;
        max-width: 980px;
        display: flex;
        flex-direction: column;
        
        align-items: center;
`;