import styled from 'styled-components';

export const Container = styled.div`

    a{
        display: flex;
        align-items: center;
        padding: 10px 20px;
        width: 140px;
        background: ${props => props.theme.colors.secundary};
        border-radius: 5px;
        color: ${props => props.theme.colors.text};

        &:hover{
            opacity: 0.6;
        }

        svg{
            margin-right: 10px;
        }
    }
`;

export const Main = styled.main`
    display: flex;
    margin-top: 80px;

    div{
        margin-left: 160px;
        margin-top: 50px;
        display: flex;

        ul{
            width: 300px;

            h1{
            margin-bottom: 35px;
            }   
            
            p{
            margin-bottom: 10px;
            font-weight: 600;

            b{
                font-weight: 300;
                margin-left: 5px;
             }
          }
       
          ul.borders{
              list-style: none;
              font-weight: 600;
              display: flex;
              position: absolute;
              align-items: center;
              top: 600px;
              width: 900px;

              button{
                  margin-left: 10px;
                  background: ${props => props.theme.colors.secundary};
                  padding: 8px 20px;
                  font-weight: 200;
                  font-size: 15px;
                  border-radius: 5px;

                  &:hover{
                    opacity: 0.6;
                  } 
              }
          }
       }

       ul.second{
           margin-top: 75px;
           margin-left: 80px;
           width: 300px;
       }
    }
`