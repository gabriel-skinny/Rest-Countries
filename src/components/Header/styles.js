import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
    background: ${props => props.theme.colors.secundary};;
    margin-bottom: 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        margin-left: 60px;
        font-size: 23px;
    }

    button{
        border: 0;
        background: none;
        margin-right: 60px;

        display: flex;
        align-items: center;

        svg{
            margin-right: 10px;
        }
    }
`;
