import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background: ${props => props.theme.colors.primary};
        width: 1440px;
        margin: 0 auto;
        font-family: 'Nunito Sans', sans-serif;
    }

    body, input, button, select{
        color: ${props => props.theme.colors.text};
    }
    
    button, select{
        cursor: pointer;
    }

    button{
        border: 0;
        padding: 0;
        margin: 0;
        background: none;
    }

    a{
        text-decoration: none;
        color: #fff;
    }
`