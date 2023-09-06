import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;
    padding: 1em;
`;
export const Descricao = styled.section`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
    h1{
        mark{
            background-color: #00ff;
            border-radius: 10px;
        }
    }
    img{
        width: 100%;
        max-width: 30em;
        z-index: 10;
        box-shadow: 0px 0px 40px blue;
    }

    @media screen and (max-width: 1280px){
        flex-direction: column-reverse;
        h1{
            text-align: center;
            font-size: 50px;
        }
    }
`;

export const Sobre = styled.section`
   
    p{
        line-height: 2em;
        margin-top: 1em;
        text-align: justify;
        font-size: 18px;
    }
`;

export const Contato = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;

    padding: 1.5em 0;

    @media screen and (max-width: 1280px){
        flex-direction: column;
    }

`;

export const Base = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    strong{
        font-size: 25px;
    }
    a{
        text-align: center;
        font-size: 2.5em;
        color: #dddd;
        svg{
            transition: 0.3s;
            margin: 0.2em 0;
            &:hover{
            box-shadow: 0px 0px 40px blue;
        }
        }
      
    }
`;