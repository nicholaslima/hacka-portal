

import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    body{ 
        font-family: Nunito,sans-serif;
        font-size: 16px;
        background: #EBF2F5;
        color: #A8A8B3;
    }

    body,input,button,textarea{
        -webkit-font-smoothing: antialiased;
        font-family: Nunito, Sans-serif;
        font-size: 18px;
        font-weight: 600;
    } 

    button{ 
        cursor: pointer;
    }

    a{ 
        text-decoration: none;
        color: black;

    }

    .button{ 
        padding: 8px 8px;
        border-radius: 20px;
        border: 0px;
        background-color: #56cfe1;
        color: #fff;
        margin-top: 15px;
    }

    .button-App{
        padding: 8px 8px;
        border-radius: 5px;
        border: 0px;
        background-color: black;
        color: #fff;
        margin-top: 15px;
    }
`;