import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const Container = styled.section`
    width: 100%;
    h2{
        margin: 0.5em 0;

        display: flex;
        align-items: center;
        svg{
            margin-right: 0.2em;
        }
    }

    .swiper-button-prev, .swiper-button-next{
        color: #fff;
    }

    /* Estilos para as bolinhas de paginação */
    .swiper-pagination-bullet, .swiper-pagination-bullet-active {
        background-color: #fff; 
    }

    p{
        text-align: center;
    }
`;

export const Slides = styled(SwiperSlide)`

    margin: 2em 0;
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff;
        img{
            width: 65px;
            margin-bottom: 0.5em;
            box-shadow: 0px 0px 40px blue;
            background: rgba(25,000,255, 0.3);
        }
}`;
