import styled from 'styled-components';

export const Container = styled.div`

`;


export const Main = styled.main`
    div{
        display: flex;
        justify-content: space-between;
        position: relative;

        input{
            margin-left: 60px;
            background: ${props => props.theme.colors.secundary};
            border: 0;
            border-radius: 5px;
            padding: 15px 40px;
            width: 450px;
        }

        select{
            margin-right: 60px;
            padding: 15px;
            width: 180px;
            background: ${props => props.theme.colors.secundary};
            border: 0;
            border-radius: 5px;
            font-size: 14px;
            appearance: none;
            text-align: left;
        }

        svg{
            position: absolute;
            right: 80px;
            top: 18px;
        }
    }

    div.countries{
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;

        button{
            border-radius: 5px;
            height: 360px;
            width: 260px;
            background: ${props => props.theme.colors.secundary};
            margin: 0 40px 60px;

            display: flex;
            flex-direction: column;
            text-align: left;
            cursor: pointer;
            transition: opacity 0.3s;

            &:hover{
                opacity: 0.6;
            }

            img{
                margin-bottom: 20px;
                height: 180px;
                width: 100%;
                align-self: center;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
            }

            h4{
                margin-left: 20px;
                margin-bottom: 20px;
                font-size: 20px;
            }

            p{
                margin-left: 20px;
                margin-bottom: 8px;
                font-size: 14px;
                font-weight: bold;

                &:nth-child(5){
                    margin-bottom: 50px;
                }
            
                b{
                  font-weight: 400;
                }
            }
        }
    }
`