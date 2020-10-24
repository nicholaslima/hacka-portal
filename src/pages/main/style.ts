
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

   

    main{
        margin: 0 auto;
        max-width: 980px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .descricao{
            margin-top: 10px;
            margin-bottom: 10px;
        }

        header{
            display: flex;
            flex-direction: column;
        }

    }

    header{ 
        max-width: 980px;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
    }

    button{ 
        padding: 8px 8px;
        border-radius: 20px;
        border: 0px;
        background-color: #56cfe1;
        color: #fff;
        margin-top: 15px;
    }

    h1{ 
        color: black;
      
        font-weight: 900;
        font-size: 36px;
    }

    ul{ 
        text-decoration: none;
        margin-top: 15px;
        margin-bottom: 15px;
        width: 350px;
        li{
            display: flex;
            flex-direction: row;
            width: 100%;
            border-radius: 15px;
            background-color: white;
            padding: 20px;
            color: black;
            margin-top: 10px;
            text-decoration: none;
            p{
                margin-left: 15px;
            }
        }
    }
`;